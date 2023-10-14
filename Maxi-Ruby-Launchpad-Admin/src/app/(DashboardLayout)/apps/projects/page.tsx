"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Typography,
  Box,
  Avatar,
  Chip,
  Paper,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import DotLoader from "react-spinners/ClipLoader";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import ParentCard from "@/app/(DashboardLayout)/components/shared/ParentCard";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import { format } from "date-fns";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import {
  IconDotsVertical,
  IconEdit,
  IconPlus,
  IconTrash,
  IconBellPlus,
} from "@tabler/icons-react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setProject } from "@/store/apps/projects/ProjectSlice";
import AdminAbi from "../../../../utils/abis/AdminAbi.json";
import Wbnabi from "../../../../utils/abis/WbnbAbi.json";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import { watchContractEvent } from "@wagmi/core";
function createData(
  project_image?: string,
  project_name?: string,
  owner?: string,
  referans_key?: string,
  price?: string,
  project_total_user?: number
) {
  return {
    project_image,
    project_name,
    owner,
    referans_key,
    price,
    project_total_user,
  };
}

function Row(props: { row: any }) {
  const { address } = useAccount();
  const { row } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDetail = () => {
    dispatch(setProject(row._id));
    router.push("/apps/details/" + row._id);
  };

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const handleAccept = async (
    id: any,
    startTime: any,
    endTime: any,
    price: any,
    tokenToSell: any,
    tokenDecimal: any,
    vestingStartTime: any,
    vestingCliffTime: any,
    vestingPeriod: any,
    enableByEther: any,
    enableByUsdt: any,
    owner: any,
    project_burn_address: any,
    project_coingecko_tokenID: any,
    project_coin_stats_url: any,
    project_image: any,
    project_linkedin_url: any,
    project_name: any,
    project_description: any,
    project_total_user: any,
    project_swap_rate: any,
    project_token_symbol: any,
    project_hard_cap: any,
    project_total_fund_participated: any,
    project_fcfs_open_time: any,
    soft_cap: any,
    audit_url: any,
    whitelist: any,
    tier: any,
    minimumPayment: any,
    maximumPayment: any,
    referans_key: any,
    wallet: any,
    project_twitter_url: any,
    project_telegram_url: any,
    project_website_url: any,
    project_discord_url: any,
    whitepaper: any
  ) => {
    if (!address) return alert("Please Connect Your Wallet");
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
    const signer = provider.getSigner();
    let t = new ethers.Contract(
      tokenToSell, // muzman token
      Wbnabi,
      signer
    );
    const contract = new ethers.Contract(
      "0x67eb4fD1F47ddE52AeF2aC556E0C441d04D4b4d3",
      AdminAbi,
      signer
    );
    setLoading(true);
    let selled = ethers.utils.parseUnits(project_hard_cap, "ether");
    try {
      await t.approve(
        "0x67eb4fD1F47ddE52AeF2aC556E0C441d04D4b4d3",
        ethers.utils.parseUnits(project_hard_cap, "ether")
      );
      const create = await contract.createPresale(
        tokenToSell,
        startTime,
        endTime,
        (Number(price) * 10 ** 18).toString(),
        selled,
        tokenDecimal,
        vestingStartTime,
        vestingCliffTime,
        vestingPeriod,
        enableByEther,
        enableByUsdt,
        {
          gasLimit: "3000000",
        }
      );

      const result = watchContractEvent(
        {
          address: "0x67eb4fD1F47ddE52AeF2aC556E0C441d04D4b4d3",
          abi: AdminAbi,
          eventName: "PresaleCreated",
        },
        async (event: any) => {
          console.log(event[0].topics[1]);
          const response = await fetch(
            "https://api.maxiruby.com/api/admin/project/accept",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
              },
              body: JSON.stringify({
                startTime,
                endTime,
                price,
                tokenToSell,
                tokenDecimal,
                vestingStartTime,
                vestingCliffTime,
                vestingPeriod,
                enableByEther,
                enableByUsdt,
                owner,
                project_burn_address,
                project_coingecko_tokenID,
                project_coin_stats_url,
                project_image,
                project_linkedin_url,
                project_name,
                project_description,
                project_total_user,
                project_swap_rate,
                project_token_symbol,
                project_hard_cap,
                project_total_fund_participated,
                project_fcfs_open_time,
                soft_cap,
                audit_url,
                whitelist,
                tier,
                minimumPayment,
                maximumPayment,
                referans_key,
                wallet,
                project_twitter_url,
                project_telegram_url,
                project_website_url,
                project_discord_url,
                project_id: event[0].topics[1],
                id,
                whitepaper: whitepaper,
              }),
            }
          );
          const data = await response.json();
          toast.success("Proje Created", {
            position: toast.POSITION.TOP_CENTER,
          });
          setLoading(false);
        }
      );
      await create.wait();
      console.log(create);
    } catch (error) {
      console.log(error);
      toast.error("Someting went wrong", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
    }
  };
  const handleDelete = async (id: any) => {
    const response = await fetch(
      "https://api.maxiruby.com/api/admin/project/delete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    const data = await response.json();
    router.refresh();
  };
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              src={row.project_image}
              alt={row.project_image}
              sx={{
                width: 90,
                height: 70,
                borderRadius: "10px",
              }}
            />
            <Typography variant="h6" fontWeight="600">
              {row.project_name}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" variant="h6">
            {row.owner}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" variant="h6">
            {row.referans_key}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            ${row.price}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" fontWeight="400">
            {row.project_hard_cap}
          </Typography>
        </TableCell>
        <TableCell>
          <IconButton
            id="basic-button"
            aria-controls={opens ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={opens ? "true" : undefined}
            onClick={handleClick}
          >
            <IconDotsVertical width={18} />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={opens}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {loading ? (
              <MenuItem>
                <DotLoader color="#1876f2" loading={loading} size={18} />
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() =>
                  handleAccept(
                    row?._id,
                    row?.startTime,
                    row?.endTime,
                    row?.price,
                    row?.tokenToSell,
                    row?.tokenDecimal,
                    row?.vestingStartTime,
                    row?.vestingCliffTime,
                    row?.vestingPeriod,
                    row?.enableByEther,
                    row?.enableByUsdt,
                    row?.owner,
                    row?.project_burn_address,
                    row?.project_coingecko_tokenID,
                    row?.project_coin_stats_url,
                    row?.project_image,
                    row?.project_linkedin_url,
                    row?.project_name,
                    row?.project_description,
                    row?.project_total_user,
                    row?.project_swap_rate,
                    row?.project_token_symbol,
                    row?.project_hard_cap,
                    row?.project_total_fund_participated,
                    row?.project_fcfs_open_time,
                    row?.soft_cap,
                    row?.audit_url,
                    row?.whitelist,
                    row?.tier,
                    row?.minimumPayment,
                    row?.maximumPayment,
                    row?.referans_key,
                    row?.wallet,
                    row?.project_twitter_url,
                    row?.project_telegram_url,
                    row?.project_website_url,
                    row?.project_discord_url,
                    row?.whitepaper
                  )
                }
              >
                <ListItemIcon>
                  <IconPlus width={18} />
                </ListItemIcon>
                Accept
              </MenuItem>
            )}
            <MenuItem onClick={handleDetail}>
              <ListItemIcon>
                <IconEdit width={18} />
              </ListItemIcon>
              Edit
            </MenuItem>
            <MenuItem onClick={() => handleDelete(row._id)}>
              <ListItemIcon>
                <IconTrash width={18} />
              </ListItemIcon>
              Delete
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  mt: 2,
                  backgroundColor: (theme) => theme.palette.grey.A200,
                  p: "5px 15px",
                  color: (theme) =>
                    `${
                      theme.palette.mode === "dark"
                        ? theme.palette.grey.A200
                        : "rgba(0, 0, 0, 0.87)"
                    }`,
                }}
              >
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Start Time</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Coingecko</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Audit</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Token Address</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row?.id}>
                    <TableCell>
                      <Typography color="textSecondary" fontWeight="400">
                        {row?.startTime
                          ? format(new Date(row.startTime), "E, MMM d yyyy")
                          : "N/A"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" fontWeight="400">
                        {row.project_coingecko_tokenID}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" fontWeight="400">
                        {row.audit_url}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="600">
                        {row.tokenToSell}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Launchpad Request",
  },
];

const GetApplication = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    console.log("Users");
    const users = async () => {
      const response = await fetch(
        "https://api.maxiruby.com/api/admin/application",
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
  return (
    <PageContainer title="Launchpad Request" description="All Applications">
      {/* breadcrumb */}
      <Breadcrumb title="Collapsible Table" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Applications">
        <BlankCard>
          <TableContainer component={Paper}>
            <Table
              aria-label="collapsible table"
              sx={{
                whiteSpace: {
                  xs: "nowrap",
                  sm: "unset",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>
                    <Typography variant="h6">Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">User</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Referafn Key</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Token Price</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Tokens</Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row: any) => (
                  <Row key={row.id} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </BlankCard>
      </ParentCard>
    </PageContainer>
  );
};

export default GetApplication;
