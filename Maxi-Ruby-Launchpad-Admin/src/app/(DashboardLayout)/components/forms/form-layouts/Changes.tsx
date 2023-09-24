import React, { useEffect } from "react";
import {
  Button,
  FormControlLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Grid,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import CustomCheckbox from "../theme-elements/CustomCheckbox";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import ParentCard from "../../shared/ParentCard";
import { IconLock, IconMail, IconUser } from "@tabler/icons-react";
import ChildCard from "../../shared/ChildCard";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import CustomTextField from "../theme-elements/CustomTextField";

const Changes = ({ tierId }: any) => {
  const [walletAddress, setWalletAddress] = React.useState("");
  const [token, setToken] = React.useState("");
  const [wl, setWl] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [value3, setValue3] = React.useState<any>("");
  const [value4, setValue4] = React.useState<any>("");
  console.log(value3, value4);

  const handleRefKey = async () => {
    setLoading(true);
    setSuccess("");
    setError("");
    if (!value3 || !value4) return setError("Please fill all the fields");
    const dateObjEnd = new Date(value4);
    const dateObjStart = new Date(value3);
    try {
      const response = await fetch(
        "http://api.maxiruby.com/api/admin/project/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
          },
          body: JSON.stringify({
            end_time: dateObjEnd.getTime(),
            start_time: dateObjStart.getTime(),
            id: tierId,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setSuccess(data.key);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      setSuccess("");
    }
  };

  const handleChangeToken = async () => {
    setLoading(true);
    setSuccess("");
    setError("");
    try {
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      setSuccess("");
    }
  };
  return (
    <>
      <ParentCard
        title="Change USDT Token Address"
        footer={
          <>
            <Stack direction="row" spacing={2}>
              <Button color="primary" variant="contained" disabled={loading}>
                {loading ? "Loading..." : "Change"}
              </Button>
            </Stack>
            {success && <span style={{ color: "green" }}>{success}</span>}
            {error && <span style={{ color: "red" }}>{error}</span>}
          </>
        }
      >
        <form>
          <FormControl fullWidth>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="username-text"
            >
              Change USDT Token Address
            </CustomFormLabel>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              id="username-text"
              placeholder="Wallet Address"
              fullWidth
              value={token.toString()}
              onChange={(e) => setToken(e.target.value)}
            />
          </FormControl>
        </form>
      </ParentCard>
      <ParentCard
        title="Change Sell Token Address"
        footer={
          <>
            <Stack direction="row" spacing={2}>
              <Button color="primary" variant="contained" disabled={loading}>
                {loading ? "Loading..." : "Change"}
              </Button>
            </Stack>
            {success && <span style={{ color: "green" }}>{success}</span>}
            {error && <span style={{ color: "red" }}>{error}</span>}
          </>
        }
      >
        <form>
          <FormControl fullWidth>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="username-text"
            >
              Change Sell Token
            </CustomFormLabel>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              id="username-text"
              placeholder="Wallet Address"
              fullWidth
              value={walletAddress.toString()}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </FormControl>
        </form>
      </ParentCard>
      <ParentCard
        title="Change Times"
        footer={
          <>
            <Stack direction="row" spacing={2}>
              <Button
                color="primary"
                variant="contained"
                disabled={loading}
                onClick={() => handleRefKey()}
              >
                {loading ? "Loading..." : "Change Time"}
              </Button>
            </Stack>
            {success && <span style={{ color: "green" }}>{success}</span>}
            {error && <span style={{ color: "red" }}>{error}</span>}
          </>
        }
      >
        <form>
          <FormControl fullWidth>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="username-text"
            >
              Change Start Time
            </CustomFormLabel>
            <Grid
              item
              xs={12}
              lg={6}
              sm={6}
              display="flex"
              alignItems="stretch"
            >
              <ChildCard title="Basic">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDateTimePicker
                    onChange={(newValue) => {
                      setValue3(newValue);
                    }}
                    renderInput={(inputProps) => (
                      <CustomTextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        inputProps={{ "aria-label": "basic date picker" }}
                        {...inputProps}
                      />
                    )}
                    value={value3}
                  />
                </LocalizationProvider>
              </ChildCard>
            </Grid>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="username-text"
            >
              Change End Time
            </CustomFormLabel>
            <Grid
              item
              xs={12}
              lg={6}
              sm={6}
              display="flex"
              alignItems="stretch"
            >
              <ChildCard title="Basic">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDateTimePicker
                    onChange={(newValue) => {
                      setValue4(newValue);
                    }}
                    renderInput={(inputProps) => (
                      <CustomTextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        inputProps={{ "aria-label": "basic date picker" }}
                        {...inputProps}
                      />
                    )}
                    value={value4}
                  />
                </LocalizationProvider>
              </ChildCard>
            </Grid>
          </FormControl>
        </form>
      </ParentCard>
    </>
  );
};

export default Changes;
