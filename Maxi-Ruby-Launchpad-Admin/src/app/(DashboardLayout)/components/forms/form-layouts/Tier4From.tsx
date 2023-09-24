import React, { useEffect } from "react";
import {
  Button,
  FormControlLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Tooltip,
  Fab,
} from "@mui/material";
import CustomCheckbox from "../theme-elements/CustomCheckbox";
import CustomFormLabel from "../theme-elements/CustomFormLabel";
import ParentCard from "../../shared/ParentCard";
import { IconLock, IconMail, IconTrash, IconUser } from "@tabler/icons-react";
import { ethers } from "ethers";
import AdminAbi from "../../../../../utils/abis/AdminAbi.json";
const TierFour = ({ tierId }: any) => {
  const [walletAddress, setWalletAddress] = React.useState("");
  const [wl, setWl] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleRefKey = async () => {
    if (!walletAddress) return setError("Please fill all the fields");
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x8B7375ec99572Ce2a1Bda223B6Cf39Ca533cA7Df",
        AdminAbi,
        signer
      );
      const addwl = await contract.addWhitelistTierFour([walletAddress], {
        gasLimit: "2000000",
      });
      const response = await fetch(
        "http://api.maxiruby.com/api/admin/addtier",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
          },
          body: JSON.stringify({
            wallet: walletAddress,
            tier: 4,
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
  const handleRefKeyRemove = async (address: string) => {
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x8B7375ec99572Ce2a1Bda223B6Cf39Ca533cA7Df",
        AdminAbi,
        signer
      );
      const addwl = await contract.removeWhitelistTierFour([address], {
        gasLimit: "2000000",
      });
      const response = await fetch(
        "http://api.maxiruby.com/api/admin/removetier",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
          },
          body: JSON.stringify({
            wallet: address,
            tier: 4,
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
  useEffect(() => {
    const getKey = async () => {
      const response = await fetch(
        "http://api.maxiruby.com/api/admin/gettiers/" + tierId,
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

      setWl(data.result.tier_four);
    };
    getKey();
  }, [loading, success]);
  return (
    <ParentCard
      title="Add Tier 4 White List"
      footer={
        <>
          <Stack direction="row" spacing={2}>
            <Button
              color="primary"
              variant="contained"
              disabled={loading}
              onClick={() => handleRefKey()}
            >
              {loading ? "Loading..." : "Add Wl"}
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
        <CustomFormLabel
          sx={{
            mt: 0,
          }}
          htmlFor="username-text"
        >
          Tier List
        </CustomFormLabel>
        <br></br>
        {wl?.map((p, i) => (
          <CustomFormLabel
            sx={{
              mt: 3,
            }}
            htmlFor="username-text"
          >
            {p}

            <Tooltip
              title="Delete"
              sx={{
                marginLeft: "10px",
              }}
              onClick={() => handleRefKeyRemove(p)}
            >
              <Fab size="small" color="error" aria-label="small-bell">
                <IconTrash width={16} />
              </Fab>
            </Tooltip>
          </CustomFormLabel>
        ))}
      </form>
    </ParentCard>
  );
};

export default TierFour;
