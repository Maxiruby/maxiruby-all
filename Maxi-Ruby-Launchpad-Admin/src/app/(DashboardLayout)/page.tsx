"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// components
import EarningsShop from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheEarningsShop";
import TopCards from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheTopCards";
import { useEffect, useState } from "react";
import {
  FbLeftIconForm,
  FbRightIconForm,
} from "./components/forms/form-layouts";
import RefKeyForm from "./components/forms/form-layouts/RefKeyForm";

export default function eCommerce() {
  const [holders, setHolders] = useState();
  const [users, setUsers] = useState();
  const [porjects, setPorjects] = useState();
  const [openprojects, setOpenProjects] = useState();
  const [closedprojects, setClosedProjects] = useState();
  const [claimedprojects, setClaimedProjects] = useState();

  useEffect(() => {
    console.log("Users");
    const users = async () => {
      const response = await fetch(
        "https://api.maxiruby.com/api/admin/landing",
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
      setUsers(data.result.users);
      setHolders(data.result.holders);
      setPorjects(data.result.projects);
      setOpenProjects(data.result.openprojects);
      setClosedProjects(data.result.closedprojects);
      setClaimedProjects(data.result.claimedprojects);
    };
    users();
  }, []);
  return (
    <PageContainer title="eCommerce Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={12}>
            <TopCards
              users={users}
              holders={holders}
              porjects={porjects}
              openprojects={openprojects}
              closedprojects={closedprojects}
              claimedprojects={claimedprojects}
            />
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <RefKeyForm />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
