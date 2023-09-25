"use client";

import { Box, Button, Grid } from "@mui/material";

import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import ParentCard from "@/app/(DashboardLayout)/components/shared/ParentCard";
import Table2 from "@/app/(DashboardLayout)/components/tables/Table2";
import { useEffect, useState } from "react";
import Table6 from "../../components/tables/Table6";
import IconLoadingButtons from "../../components/forms/form-elements/button/IconLoadingButtons";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Holders",
  },
];
const Holders = () => {
  const [users, setUsers] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  useEffect(() => {
    console.log("Users");
    const users = async () => {
      const response = await fetch(
        "https://api.maxiruby.com/api/admin/holders",
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

  const handleRefresh = async () => {
    try {
      setBtnLoading(true);
      const response = await fetch(
        "https://api.maxiruby.com/api/holder/0x5Cf8eA4278f689B301C4a17DdCa9D5ec8b0B0511",
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
      setUsers(data.data);
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      console.log(error);
    }
  };
  return (
    <PageContainer title="Holders" description="Holder List">
      {/* breadcrumb */}
      <Breadcrumb title="Holders" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Holders">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Grid
                item
                xs={12}
                lg={6}
                display="flex"
                alignItems="stretch"
                sx={{
                  background: "transparent",
                }}
              >
                {btnLoading ? (
                  <IconLoadingButtons />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleRefresh}
                  >
                    Refresh Holder List
                  </Button>
                )}
              </Grid>
              <Table6 data={users} />
            </Box>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Holders;
