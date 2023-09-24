/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { fetchBlogPosts, fetchBlogPost } from "@/store/apps/blog/BlogSlice";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  CardContent,
  Stack,
  Avatar,
  Typography,
  CardMedia,
  Chip,
  Tooltip,
  Box,
  Divider,
  TextField,
  Button,
  Skeleton,
} from "@mui/material";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import {
  IconEye,
  IconMessage2,
  IconPoint,
  IconQuote,
} from "@tabler/icons-react";
import { format } from "date-fns";
import BlogComment from "./BlogComment";
import { uniqueId } from "lodash";
import { addComment } from "@/store/apps/blog/BlogSlice";
import BlankCard from "../../../shared/BlankCard";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import type { BlogPostType, BlogType } from "../../../../types/apps/blog";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const getTitle: string | any = pathName.split("/").pop();

  const [replyTxt, setReplyTxt] = React.useState("");

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  const paramCase = (t: string) =>
    t
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  // Get post
  const getPost = useSelector((state: AppState) => state.blogReducer.blogposts);
  console.log(getPost);
  const post: BlogPostType | any = getPost.find(
    (p: BlogPostType) => getTitle === paramCase(p.title)
  );

  const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/apps/blog/posts",
      title: "Blog",
    },
    {
      title: "Blog post",
    },
  ];
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    const users = async () => {
      const response = await fetch(
        "http://api.maxiruby.com/api/admin/getblog/" + getTitle,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    users();
  }, []);
  const onSubmit = async (id: number, reply: string) => {
    const replyId: string = uniqueId("#comm_");
    const newReply = {
      id: replyId,
      profile: {
        id: uniqueId("#REPLY_"),
        avatar: post?.author.avatar,
        name: post?.author.name,
        time: "now",
      },
      comment: reply,
      replies: [],
    };
    dispatch(addComment(id, newReply));
    dispatch(fetchBlogPost(getTitle));
    setReplyTxt("");
  };

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Breadcrumb title="Blog Detail" items={BCrumb} />
      {users ? (
        <>
          <BlankCard>
            <>
              {isLoading ? (
                <>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="100%"
                    height={440}
                    sx={{
                      borderRadius: (theme) => theme.shape.borderRadius / 5,
                    }}
                  ></Skeleton>
                </>
              ) : (
                <CardMedia
                  component="img"
                  height="440"
                  image={users?.image}
                  alt="green iguana"
                />
              )}

              <Divider />
              <CardContent>
                <Typography variant="h2">{users.tittle}</Typography>

                <div
                  dangerouslySetInnerHTML={{
                    __html: `${users.text}`,
                  }}
                />

                <Typography variant="h3">TAGS</Typography>
                <ul>
                  {users?.tags?.map((tag: any) => (
                    <li>{tag?.text}</li>
                  ))}
                </ul>
                <Box my={4}>
                  <Divider />
                </Box>
              </CardContent>
            </>
          </BlankCard>
        </>
      ) : (
        "No found"
      )}
    </Box>
  );
};

export default BlogDetail;
