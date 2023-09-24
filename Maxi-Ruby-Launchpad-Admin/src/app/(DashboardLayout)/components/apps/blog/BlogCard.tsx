// third-party
import { format } from "date-fns";
import NextLink from "next/link";
import { useDispatch } from "@/store/hooks";
import {
  CardContent,
  Stack,
  Avatar,
  Typography,
  CardMedia,
  Chip,
  Grid,
  Tooltip,
  Box,
} from "@mui/material";
import { IconEye, IconMessage2, IconPoint } from "@tabler/icons-react";
import { fetchBlogPost } from "@/store/apps/blog/BlogSlice";
import BlankCard from "../../shared/BlankCard";
import { BlogPostType } from "../../../types/apps/blog";

interface Btype {
  post: BlogPostType;
  index?: number;
}

const BlogCard = ({ post }: any) => {
  console.log(post);

  const dispatch = useDispatch();
  const { image, title, _id }: any = post;

  const linkTo = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return (
    <Grid item xs={12} lg={4} md={4} sm={6} display="flex" alignItems="stretch">
      <BlankCard className="hoverCard">
        <>
          <Typography
            component={NextLink}
            href={`/apps/blog/detail/${_id}`}
            onClick={() => dispatch(fetchBlogPost(linkTo))}
          >
            <CardMedia
              component="img"
              height="240"
              image={image}
              alt="green iguana"
            />
          </Typography>
          <CardContent>
            <Stack direction="row" sx={{ marginTop: "-45px" }}>
              <Chip
                sx={{
                  marginLeft: "auto",
                  marginTop: "-21px",
                  backgroundColor: "white",
                }}
                label="2 min Read"
                size="small"
              ></Chip>
            </Stack>

            <Box my={3}>
              <Typography
                gutterBottom
                variant="h5"
                color="inherit"
                sx={{ textDecoration: "none" }}
                component={NextLink}
                href={`/apps/blog/detail/${_id}`}
                onClick={() => dispatch(fetchBlogPost(linkTo))}
              >
                {title}
              </Typography>
            </Box>
          </CardContent>
        </>
      </BlankCard>
    </Grid>
  );
};

export default BlogCard;
