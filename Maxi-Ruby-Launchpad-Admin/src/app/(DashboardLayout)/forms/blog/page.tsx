"use client";

import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import "./Quill.css";
import { WithContext as ReactTags } from "react-tag-input";
import ImageUploading from "react-images-uploading";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill: any = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
);

import Paper from "@mui/material/Paper";

import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import ParentCard from "@/app/(DashboardLayout)/components/shared/ParentCard";
import { Box, Button } from "@mui/material";
import CustomFormLabel from "../../components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "../../components/forms/theme-elements/CustomTextField";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Blog",
  },
];

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
const QuillEditor = () => {
  const [text, setText] = useState("");
  const [images, setImages] = React.useState<any>([]);
  const theme = useTheme();
  const borderColor = theme.palette.divider;
  const [tags, setTags] = React.useState<any>([]);
  const [title, setTitle] = React.useState("");
  const handleDelete = (i: any) => {
    setTags(tags.filter((tag: any, index: any) => index !== i));
  };

  const handleAddition = (tag: any) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag: any, currPos: any, newPos: any) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index: any) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  console.log(title, text, images[0]?.data_url, tags);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleBlog = async () => {
    if (!title || !text || !images[0]?.data_url || !tags)
      return setError("Please fill all the fields");
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const response = await fetch("https://api.maxiruby.com/api/admin/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
        },
        body: JSON.stringify({
          title: title,
          image: images[0]?.data_url,
          text: text,
          tags: tags,
        }),
      });
      const data = await response.json();
      if (data) {
        setLoading(false);
        setSuccess("Blog Posted Successfully");
        setError("");
      }
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError("Someting failed");
    }
  };
  return (
    <PageContainer title="Blog" description="this is Blog Editor">
      {/* breadcrumb */}
      <Breadcrumb title="Blog Editor" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Blog Editor">
        <Paper sx={{ border: `1px solid ${borderColor}` }} variant="outlined">
          <ReactQuill
            value={text}
            onChange={(value: any) => {
              setText(value);
            }}
            placeholder="Type here..."
          />
        </Paper>
      </ParentCard>
      <br></br>
      <ParentCard title="Blog Tittle">
        <Paper sx={{ border: `1px solid ${borderColor}` }} variant="outlined">
          <CustomTextField
            onChange={(e: any) => setTitle(e.target.value)}
            id="email-address"
            helperText="Please enter your blog title"
            variant="outlined"
            fullWidth
          />
        </Paper>
      </ParentCard>
      <br></br>
      <br></br>
      <ParentCard title="Blog Tag">
        <Paper sx={{ border: `1px solid ${borderColor}` }} variant="outlined">
          <ReactTags
            tags={tags}
            inputFieldPosition="inline"
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            autocomplete
          />
        </Paper>
      </ParentCard>
      <br></br>
      <ParentCard title="Blog Image">
        <Paper sx={{ border: `1px solid ${borderColor}` }} variant="outlined">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </Button>
                &nbsp;
                <Button
                  color="primary"
                  variant="contained"
                  onClick={onImageRemoveAll}
                >
                  Remove all images
                </Button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="200" />
                    <div className="image-item__btn-wrapper">
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => onImageUpdate(index)}
                      >
                        Update
                      </Button>
                      <Button onClick={() => onImageRemove(index)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </Paper>
      </ParentCard>
      <br></br>

      <Box>
        <Button variant="contained" color="primary" onClick={handleBlog}>
          Post Blog
        </Button>
      </Box>
      <>
        {success && <span style={{ color: "green" }}>{success}</span>}
        {error && <span style={{ color: "red" }}>{error}</span>}
      </>
    </PageContainer>
  );
};

export default QuillEditor;
