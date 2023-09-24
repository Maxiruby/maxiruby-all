import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Chip,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  AvatarGroup,
} from "@mui/material";
import BlankCard from "../shared/BlankCard";
import { Box, Stack } from "@mui/system";
import {
  IconDotsVertical,
  IconEdit,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";

const rows = [
  {
    status: "active",
    avatar: "/images/users/1.jpg",
    name: "Olivia Rhye",
    project: "Xtreme admin",
    percent: 60,
    users: [{ img: "/images/users/1.jpg" }, { img: "/images/users/2.jpg" }],
  },
  {
    status: "cancel",
    avatar: "/images/users/2.jpg",
    name: "Barbara Steele",
    project: "Adminpro admin",
    percent: 30,
    users: [
      { img: "/images/users/1.jpg" },
      { img: "/images/users/2.jpg" },
      { img: "/images/users/3.jpg" },
    ],
  },
  {
    status: "active",
    avatar: "/images/users/3.jpg",
    name: "Leonard Gordon",
    project: "Monster admin",
    percent: 45,
    users: [{ img: "/images/users/3.jpg" }, { img: "/images/users/2.jpg" }],
  },
  {
    status: "pending",
    avatar: "/images/users/4.jpg",
    name: "Evelyn Pope",
    project: "Materialpro admin",
    percent: 37,
    users: [
      { img: "/images/users/1.jpg" },
      { img: "/images/users/2.jpg" },
      { img: "/images/users/5.jpg" },
    ],
  },
  {
    status: "cancel",
    avatar: "/images/users/5.jpg",
    name: "Tommy Garza",
    project: "Elegant admin",
    percent: 87,
    users: [{ img: "/images/users/5.jpg" }, { img: "/images/users/6.jpg" }],
  },
  {
    status: "pending",
    avatar: "/images/users/6.jpg",
    name: "Isabel Vasquez",
    project: "Modernize admin",
    percent: 32,
    users: [{ img: "/images/users/2.jpg" }, { img: "/images/users/4.jpg" }],
  },
];

const Table2 = ({ data }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // "_id": "64f1ed9d2583634741d05cf2",
  // "password": "$2b$12$4naCVCqOVxBnjxGhBno2XeC4Y9CIYtr77sNer6mguPrB66YCacKsm",
  // "email": "naber@deneme.com",
  // "userVerified": false,
  // "holderCount": 0,
  // "isWhitelisted": false,
  // "isAdmin": true,
  // "wallets": [],
  // "__v": 0
  return (
    <BlankCard>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">User</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">User Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Wallets</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => (
              <TableRow
                key={row.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      src={row.avatar}
                      alt={row.avatar}
                      sx={{ width: 42, height: 42 }}
                    />
                    <Box>
                      <Box>
                        <Typography variant="subtitle2" noWrap>
                          {row.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell scope="row">
                  <Typography variant="subtitle1" color="textSecondary">
                    {row.username}
                  </Typography>
                </TableCell>
                <TableCell>
                  {row.wallets.map((wallet: any, i: any) => (
                    <AvatarGroup sx={{ justifyContent: "start" }}>
                      <>
                        <br></br>
                        <Typography variant="subtitle1" color="textSecondary">
                          {wallet.address}
                        </Typography>
                      </>
                    </AvatarGroup>
                  ))}
                </TableCell>
                <TableCell>
                  <Chip
                    label={!row.banned ? "Active" : "Banned"}
                    sx={{
                      backgroundColor:
                        row.status == "active"
                          ? (theme) => theme.palette.primary.light
                          : row.status == "cancel"
                          ? (theme) => theme.palette.error.light
                          : (theme) => theme.palette.success.light,
                      color:
                        row.status == "active"
                          ? (theme) => theme.palette.primary.main
                          : row.status == "cancel"
                          ? (theme) => theme.palette.error.main
                          : (theme) => theme.palette.success.main,
                    }}
                  />
                </TableCell>

                <TableCell>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <IconDotsVertical width={18} />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconPlus width={18} />
                      </ListItemIcon>
                      Add
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconEdit width={18} />
                      </ListItemIcon>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconTrash width={18} />
                      </ListItemIcon>
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BlankCard>
  );
};

export default Table2;
