"use client";

import { Box, Grid } from "@mui/material";

import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import ParentCard from "@/app/(DashboardLayout)/components/shared/ParentCard";
import Table2 from "@/app/(DashboardLayout)/components/tables/Table2";
import { useEffect, useState } from "react";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Users",
  },
];
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Users");
    const users = async () => {
      const response = await fetch(
        "https://api.maxiruby.com/api/admin/allusers",
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
      setUsers(data.result);
    };
    users();
  }, []);
  return (
    <PageContainer title="Users" description="kyc users">
      {/* breadcrumb */}
      <Breadcrumb title="Users" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Users">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Table2 data={users} />
            </Box>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Users;
