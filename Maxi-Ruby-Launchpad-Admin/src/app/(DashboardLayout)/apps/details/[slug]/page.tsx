"use client";
import React, { useEffect, useState } from "react";
import ProjeDetail from "../../../components/forms/form-layouts/ProjeDetail";
import PageContainer from "../../../components/container/PageContainer";
import Breadcrumb from "../../../layout/shared/breadcrumb/Breadcrumb";
import ParentCard from "../../../components/shared/ParentCard";

import {
  Box,
  FormControlLabel,
  Button,
  Grid,
  MenuItem,
  FormControl,
  Alert,
  TextField,
} from "@mui/material";
import CustomFormLabel from "../../../components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "../../../components/forms/theme-elements/CustomTextField";
import CustomSelect from "../../../components/forms/theme-elements/CustomSelect";
import CustomRadio from "../../../components/forms/theme-elements/CustomRadio";
import { useDispatch, useSelector } from "react-redux";
import CustomCheckbox from "../../../components/forms/theme-elements/CustomCheckbox";
import { setProject } from "@/store/apps/projects/ProjectSlice";
import { useRouter, useParams } from "next/navigation";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Proje Edit",
  },
];
const Detail = () => {
  const [currency, setCurrency] = React.useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = useParams();
  console.log(slug);
  //@ts-ignore
  const proje = useSelector((state) => state?.projectReducer);
  console.log(proje);

  const handleChange2 = (event: any) => {
    setCurrency(event.target.value);
  };

  const [country, setCountry] = React.useState("");

  const handleChange4 = (event: any) => {
    setCountry(event.target.value);
  };
  const [users, setUsers] = React.useState<any>([]);
  useEffect(() => {
    const getProje = async () => {
      const response = await fetch(
        "http://api.maxiruby.com/api/admin/application/" + slug,
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
    getProje();
  }, []);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange3 = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleDetailCancel = () => {
    dispatch(setProject(""));
    router.push("/apps/projects");
  };
  return (
    <PageContainer title="Project" description="Edit Proje">
      {/* breadcrumb */}
      <Breadcrumb title="Projects" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Projects">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              {users ? (
                <div>
                  {/* ------------------------------------------------------------------------------------------------ */}
                  {/* Basic Checkbox */}
                  {/* ------------------------------------------------------------------------------------------------ */}
                  <ParentCard
                    title={users?.project_name + " Details"}
                    footer={
                      <>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{
                            mr: 1,
                          }}
                          onClick={handleDetailCancel}
                        >
                          Cancel
                        </Button>
                        <Button variant="contained" color="primary">
                          Submit
                        </Button>
                      </>
                    }
                  >
                    <>
                      <Alert severity="info">Project Info</Alert>
                      <form>
                        <Grid container spacing={3} mb={3}>
                          <Grid item lg={6} md={12} sm={12}>
                            <CustomFormLabel htmlFor="fname-text">
                              Project Name
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.project_name}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Ref Key
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.referans_key}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Owner
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.owner}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Burn Address
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.project_burn_address}
                            />
                            <CustomFormLabel htmlFor="date">
                              Start Time
                            </CustomFormLabel>
                            <CustomTextField
                              id="date"
                              type="date"
                              variant="outlined"
                              fullWidth
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            <CustomFormLabel htmlFor="date">
                              End Time
                            </CustomFormLabel>
                            <CustomTextField
                              id="date"
                              type="date"
                              variant="outlined"
                              fullWidth
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Token Price
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.price}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Token Address
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.tokenToSell}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Token Decimal
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.tokenDecimal}
                            />
                            <CustomFormLabel htmlFor="date">
                              Vesting Start Time
                            </CustomFormLabel>
                            <CustomTextField
                              id="date"
                              type="date"
                              variant="outlined"
                              fullWidth
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            <CustomFormLabel htmlFor="date">
                              Vesting Cliff Time
                            </CustomFormLabel>
                            <CustomTextField
                              id="date"
                              type="date"
                              variant="outlined"
                              fullWidth
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Vesting Period
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.vestingPeriod}
                            />
                            <CustomFormLabel>Payment Token</CustomFormLabel>
                            <FormControl
                              sx={{
                                width: "100%",
                              }}
                            >
                              <Box>
                                <FormControlLabel
                                  checked={selectedValue === "a"}
                                  onChange={handleChange3}
                                  value="a"
                                  label="BNB"
                                  name="radio-button-demo"
                                  control={<CustomRadio />}
                                />
                                <FormControlLabel
                                  checked={selectedValue === "b"}
                                  onChange={handleChange3}
                                  value="b"
                                  label="USDT"
                                  control={<CustomRadio />}
                                  name="radio-button-demo"
                                />
                              </Box>
                            </FormControl>
                            <CustomFormLabel htmlFor="fname-text">
                              Hard Cap
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.project_hard_cap}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Total fund participated
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.project_total_fund_participated}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Total FCFS Open Time
                            </CustomFormLabel>
                            <CustomTextField
                              id="date"
                              type="date"
                              variant="outlined"
                              fullWidth
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Token Symbol
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.project_token_symbol}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Whitelist
                            </CustomFormLabel>
                            <FormControlLabel
                              control={
                                <CustomCheckbox
                                  defaultChecked={users?.whitelist}
                                  color="success"
                                  inputProps={{
                                    "aria-label": "checkbox with default color",
                                  }}
                                />
                              }
                              label="Whitelist Enabled"
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Tier
                            </CustomFormLabel>
                            <FormControlLabel
                              control={
                                <CustomCheckbox
                                  defaultChecked={users?.tier}
                                  color="success"
                                  inputProps={{
                                    "aria-label": "checkbox with default color",
                                  }}
                                />
                              }
                              label="Tier System Enabled"
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Minimum Payment
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.minimumPayment}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Maximum Payment
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.maximumPayment}
                            />
                            <CustomFormLabel htmlFor="fname-text">
                              Project Description
                            </CustomFormLabel>
                            <CustomTextField
                              id="fname-text"
                              variant="outlined"
                              fullWidth
                              value={users?.project_description}
                            />
                          </Grid>
                        </Grid>
                      </form>
                      <Alert severity="info">Social Media</Alert>
                      <Grid container spacing={3} mb={3} mt={1}>
                        <CustomFormLabel htmlFor="fname-text">
                          Project Website
                        </CustomFormLabel>
                        <CustomTextField
                          id="fname-text"
                          variant="outlined"
                          fullWidth
                          value={users?.project_website_url}
                        />
                        <CustomFormLabel htmlFor="fname-text">
                          Project Telegram
                        </CustomFormLabel>
                        <CustomTextField
                          id="fname-text"
                          variant="outlined"
                          fullWidth
                          value={users?.project_telegram_url}
                        />
                        <CustomFormLabel htmlFor="fname-text">
                          Project Twitter
                        </CustomFormLabel>
                        <CustomTextField
                          id="fname-text"
                          variant="outlined"
                          fullWidth
                          value={users?.project_twitter_url}
                        />
                        <CustomFormLabel htmlFor="fname-text">
                          Project Discord
                        </CustomFormLabel>
                        <CustomTextField
                          id="fname-text"
                          variant="outlined"
                          fullWidth
                          value={users?.project_discord_url}
                        />
                        <CustomFormLabel htmlFor="fname-text">
                          Project Linkedin
                        </CustomFormLabel>
                        <CustomTextField
                          id="fname-text"
                          variant="outlined"
                          fullWidth
                          value={users?.project_linkedin_url}
                        />
                        <CustomFormLabel htmlFor="fname-text">
                          Project Coingecko id
                        </CustomFormLabel>
                        <CustomTextField
                          id="fname-text"
                          variant="outlined"
                          fullWidth
                          value={users?.project_coingecko_tokenID}
                        />
                      </Grid>
                    </>
                  </ParentCard>
                </div>
              ) : null}
            </Box>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default Detail;
