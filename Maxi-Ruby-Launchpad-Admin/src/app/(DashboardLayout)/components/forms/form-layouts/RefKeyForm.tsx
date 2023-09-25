import React from "react";
import {
  Button,
  FormControlLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import CustomCheckbox from "../theme-elements/CustomCheckbox";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import ParentCard from "../../shared/ParentCard";
import { IconLock, IconMail, IconUser } from "@tabler/icons-react";

const RefKeyForm = () => {
  const [walletAddress, setWalletAddress] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleRefKey = async () => {
    if (!walletAddress) return setError("Please fill all the fields");
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const response = await fetch("https://api.maxiruby.com/api/admin/key", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
        },
        body: JSON.stringify({
          wallet: walletAddress,
        }),
      });
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
  return (
    <ParentCard
      title="Create New Ref Key"
      footer={
        <>
          <Stack direction="row" spacing={2}>
            <Button
              color="primary"
              variant="contained"
              disabled={loading}
              onClick={() => handleRefKey()}
            >
              {loading ? "Loading..." : "Create Ref Key"}
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
            Wallet Address
          </CustomFormLabel>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconUser width={20} />
              </InputAdornment>
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
  );
};

export default RefKeyForm;
