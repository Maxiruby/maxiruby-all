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
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import AdminAbi from "../../../../../utils/abis/AdminAbi.json";
const TierOne = ({ tierId, project_id }: any) => {
  const [walletAddress, setWalletAddress] = React.useState("");
  const [wl, setWl] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  console.log(project_id);

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
        "0xcDaaD7e34576b2Bf852227451731994Eaa34A6B7",
        AdminAbi,
        signer
      );
      const addwl = await contract.addWhitelistTierOne([walletAddress], {
        gasLimit: "2000000",
      });
      const response = await fetch(
        "https://api.maxiruby.com/api/admin/addtier",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
          },
          body: JSON.stringify({
            wallet: walletAddress,
            tier: 1,
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
        "0xcDaaD7e34576b2Bf852227451731994Eaa34A6B7",
        AdminAbi,
        signer
      );
      const addwl = await contract.removeWhitelistTierOne([address], {
        gasLimit: "2000000",
      });
      const response = await fetch(
        "https://api.maxiruby.com/api/admin/removetier",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
          },
          body: JSON.stringify({
            wallet: address,
            tier: 1,
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
        "https://api.maxiruby.com/api/admin/gettiers/" + tierId,
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

      setWl(data.result.tier_one);
    };
    getKey();
  }, [loading, success]);
  return (
    <ParentCard
      title="Add Tier 1 White List"
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
        {wl.map((p, i) => (
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

export default TierOne;
