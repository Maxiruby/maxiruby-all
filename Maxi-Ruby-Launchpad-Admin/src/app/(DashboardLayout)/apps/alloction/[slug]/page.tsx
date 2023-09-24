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
import TierOneAlc from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier1Alc";
import TierTwoAlc from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier2Alc";
import TierThreeAlc from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier3Alc";
import TierFiveAlc from "@/app/(DashboardLayout)/components/forms/form-layouts/Tier5Alc";

const page = () => {
  const { slug } = useParams();
  //@ts-ignore
  const proje = useSelector((state) => state?.projectReducer);
  return (
    <PageContainer title="Edit Alloction" description="this is Alloction">
      <Box mt={3}>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} xs={12}>
            <TierOneAlc tierId={slug} project_id={proje.project_id} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TierTwoAlc tierId={slug} project_id={proje.project_id} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TierThreeAlc tierId={slug} project_id={proje.project_id} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TierFour tierId={slug} project_id={proje.project_id} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <TierFiveAlc tierId={slug} project_id={proje.project_id} />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default page;
