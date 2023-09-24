"use client";

import * as React from "react";
import PageContainer from "../../../components/container/PageContainer";
import TierOne from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier1From";
import { Box, Grid } from "@mui/material";
import { useRouter, useParams } from "next/navigation";
import TierTwo from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier2From";
import TierThree from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier3From";
import TierFour from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier4From";
import TierFive from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier5From";
import { useSelector } from "react-redux";
import Changes from "@/app/(DashboardLayout)/components/forms/form-layouts/Changes";

const page = () => {
  const { slug } = useParams();
  //@ts-ignore
  const proje = useSelector((state) => state?.projectReducer);
  return (
    <PageContainer title="Add Whitelist" description="this is Whitelist">
      <Box mt={3}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} xs={12}>
            <TierOne tierId={slug} project_id={proje.project_id} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TierTwo tierId={slug} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TierThree tierId={slug} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TierFour tierId={slug} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TierFive tierId={slug} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}></Grid>
          <Grid item lg={6} md={12} xs={12}>
            <Changes tierId={slug} />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default page;
