import { useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import BlogCard from "./BlogCard";
import { orderBy } from "lodash";
import { useSelector, useDispatch } from "@/store/hooks";
import { fetchBlogPosts } from "@/store/apps/blog/BlogSlice";
import BlogFeaturedCard from "./BlogFeaturedCard";
import { BlogPostType } from "../../../types/apps/blog";

const BlogListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  const filterBlogs = (
    posts: BlogPostType[],
    sortBy: string,
    _cSearch: string
  ) => {
    // SORT BY

    if (sortBy === "newest") {
      posts = orderBy(posts, ["createdAt"], ["desc"]);
    }
    if (sortBy === "oldest") {
      posts = orderBy(posts, ["createdAt"], ["asc"]);
    }
    if (sortBy === "popular") {
      posts = orderBy(posts, ["view"], ["desc"]);
    }
    if (posts) {
      return (posts = posts.filter((t) => t.featured === false));
    }

    return posts;
  };

  const filterFeaturedpost = (posts: BlogPostType[]) => {
    return (posts = posts.filter((t) => t.featured));
  };

  const blogPosts = useSelector((state) =>
    filterBlogs(
      state.blogReducer.blogposts,
      state.blogReducer.sortBy,
      state.blogReducer.blogSearch
    )
  );

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = async () => {
      const response = await fetch("https://api.maxiruby.com/api/admin/blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
        },
      });
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    users();
  }, []);
  console.log(users);

  return (
    <Grid container spacing={3}>
      {users
        ? users.map((user: any) => {
            return <BlogCard post={user} key={user.id} />;
          })
        : null}

      <Grid item lg={12} sm={12} mt={3}>
        <Pagination
          count={10}
          color="primary"
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Grid>
    </Grid>
  );
};

export default BlogListing;
