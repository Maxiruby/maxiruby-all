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
import Web3 from "web3";
const TierFoureAlc = ({ tierId, project_id }: any) => {
  const [walletAddress, setWalletAddress] = React.useState("");
  const [minAlc, setMinAlc] = React.useState("");
  const [maxAlc, setMaxAlc] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  console.log(project_id);

  const handleRefKey = async () => {
    if (!minAlc || !maxAlc) return setError("Please fill all the fields");
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
      const addwl = await contract.updateMaxAllocation(
        4,
        Web3.utils.toWei(minAlc, "ether"),
        {
          gasLimit: "2000000",
        }
      );
      const addwlMax = await contract.updateMaxAllocation(
        4,
        Web3.utils.toWei(maxAlc, "ether"),
        {
          gasLimit: "2000000",
        }
      );
      addwlMax.wait();
      setLoading(false);
      setSuccess("Alloction Updated Successfully");
      setError("");
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <ParentCard
      title="Tier 4 Allociton"
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
            Minimum Alloction
          </CustomFormLabel>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconUser width={20} />
              </InputAdornment>
            }
            id="username-text"
            placeholder="Min Allociton"
            fullWidth
            onChange={(e) => setMinAlc(e.target.value)}
          />
          <br></br>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="username-text"
          >
            Maximum Alloction
          </CustomFormLabel>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconUser width={20} />
              </InputAdornment>
            }
            id="username-text"
            placeholder="Max Allociton"
            fullWidth
            onChange={(e) => setMaxAlc(e.target.value)}
          />
        </FormControl>
      </form>
    </ParentCard>
  );
};

export default TierFoureAlc;
