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
  IconLockPause,
} from "@tabler/icons-react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setProject, setProject_id } from "@/store/apps/projects/ProjectSlice";
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
    dispatch(setProject_id(row.project_id));
    router.push("/apps/whitelist/" + row._id);
  };
  const handleDetailAlc = () => {
    router.push("/apps/alloction/" + row._id);
  };
  const [loading, setLoading] = React.useState(false);
  const pause = async (name: any) => {
    const response = await fetch(
      "https://api.maxiruby.com/api/admin/project/pause",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
        },
        body: JSON.stringify({ project_name: name }),
      }
    );
    const data = await response.json();
    toast.success("Proje Created", {
      position: toast.POSITION.TOP_CENTER,
    });
    setLoading(false);
  };
  const active = async (name: any) => {
    const response = await fetch(
      "https://api.maxiruby.com/api/admin/project/activeet",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFlZGE0MjU4MzYzNDc0MWQwNWNmNSIsImVtYWlsIjoiZGVuZW1lQGRlbmVtZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjkzNTc3NDM0fQ.0dXql7G539g0mTKwY6iwdr4ex_NaOMiMTmSYSO3zt6Y",
        },
        body: JSON.stringify({ project_name: name }),
      }
    );
    const data = await response.json();
    toast.success("Proje Created", {
      position: toast.POSITION.TOP_CENTER,
    });
    setLoading(false);
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
            {row.status === "pause" ? (
              <MenuItem onClick={() => active(row.project_name)}>
                <ListItemIcon>
                  <IconLockPause width={18} />
                </ListItemIcon>
                Active
              </MenuItem>
            ) : (
              <MenuItem onClick={() => pause(row.project_name)}>
                <ListItemIcon>
                  <IconLockPause width={18} />
                </ListItemIcon>
                Pause
              </MenuItem>
            )}

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconTrash width={18} />
              </ListItemIcon>
              Delete
            </MenuItem>
            <MenuItem onClick={handleDetail}>
              <ListItemIcon>
                <IconPlus width={18} />
              </ListItemIcon>
              Add WhiteList
            </MenuItem>
            <MenuItem onClick={handleDetailAlc}>
              <ListItemIcon>
                <IconPlus width={18} />
              </ListItemIcon>
              Edit Allocitons
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
        "https://api.maxiruby.com/api/admin/accepted",
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
