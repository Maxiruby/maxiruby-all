import React from "react";
import { CardContent, Typography, Grid, Avatar, Stack } from "@mui/material";
import {
  IconBox,
  IconChartBar,
  IconRefresh,
  IconUsers,
  IconExchange,
  IconLockOpen,
  IconLock,
} from "@tabler/icons-react";
import BlankCard from "../../shared/BlankCard";

const sales = [
  {
    bg: "primary",
    icon: <IconUsers size={24} />,
    digits: "39,354",
    subtext: "Customers",
    profit: "-9",
    type: "loss",
  },
  {
    bg: "warning",
    icon: <IconBox size={24} />,
    digits: "4,396",
    subtext: "Products",
    profit: "+23",
    type: "profit",
  },
  {
    bg: "error",
    icon: <IconChartBar size={24} />,
    digits: "423,39",
    subtext: "Sales",
    profit: "+38",
    type: "profit",
  },
  {
    bg: "success",
    icon: <IconRefresh size={24} />,
    digits: "835",
    subtext: "Refunds",
    profit: "-12",
    type: "loss",
  },
];

const TopCards = ({
  users,
  holders,
  porjects,
  openprojects,
  closedprojects,
  claimedprojects,
}: any) => (
  <BlankCard>
    <Grid container spacing={0}>
      <Grid
        item
        xs={4}
        lg={2}
        sm={2}
        sx={{
          "&:last-child .MuiCardContent-root": {
            borderRight: "0",
          },
        }}
      >
        <CardContent
          sx={{
            borderRight: {
              xs: "0",
              sm: "1px solid rgba(0,0,0,0.1)",
            },
          }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              backgroundColor: "primary" + ".light",
              color: "primary" + ".main",
            }}
          >
            <IconUsers size={24} />
          </Avatar>

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Typography variant="h3">{users}</Typography>
            <Typography color="error.main" variant="caption"></Typography>
          </Stack>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            Customers
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={4}
        lg={2}
        sm={2}
        sx={{
          "&:last-child .MuiCardContent-root": {
            borderRight: "0",
          },
        }}
      >
        <CardContent
          sx={{
            borderRight: {
              xs: "0",
              sm: "1px solid rgba(0,0,0,0.1)",
            },
          }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              backgroundColor: "warning" + ".light",
              color: "warning" + ".main",
            }}
          >
            <IconUsers size={24} />
          </Avatar>

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Typography variant="h3">{holders}</Typography>
            <Typography color="error.main" variant="caption"></Typography>
          </Stack>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            Holders
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={4}
        lg={2}
        sm={2}
        sx={{
          "&:last-child .MuiCardContent-root": {
            borderRight: "0",
          },
        }}
      >
        <CardContent
          sx={{
            borderRight: {
              xs: "0",
              sm: "1px solid rgba(0,0,0,0.1)",
            },
          }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              backgroundColor: "success" + ".light",
              color: "success" + ".main",
            }}
          >
            <IconChartBar size={24} />
          </Avatar>

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Typography variant="h3">{porjects}</Typography>
            <Typography color="error.profit" variant="caption"></Typography>
          </Stack>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            Projects
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={4}
        lg={2}
        sm={2}
        sx={{
          "&:last-child .MuiCardContent-root": {
            borderRight: "0",
          },
        }}
      >
        <CardContent
          sx={{
            borderRight: {
              xs: "0",
              sm: "1px solid rgba(0,0,0,0.1)",
            },
          }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              backgroundColor: "error" + ".light",
              color: "error" + ".main",
            }}
          >
            <IconLock size={24} />
          </Avatar>

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Typography variant="h3">{closedprojects}</Typography>
            <Typography color="error.profit" variant="caption"></Typography>
          </Stack>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            End Projects
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={4}
        lg={2}
        sm={2}
        sx={{
          "&:last-child .MuiCardContent-root": {
            borderRight: "0",
          },
        }}
      >
        <CardContent
          sx={{
            borderRight: {
              xs: "0",
              sm: "1px solid rgba(0,0,0,0.1)",
            },
          }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              backgroundColor: "success" + ".light",
              color: "success" + ".main",
            }}
          >
            <IconRefresh size={24} />
          </Avatar>

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Typography variant="h3">{claimedprojects}</Typography>
            <Typography color="error.main" variant="caption"></Typography>
          </Stack>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            Claim Projects
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={4}
        lg={2}
        sm={2}
        sx={{
          "&:last-child .MuiCardContent-root": {
            borderRight: "0",
          },
        }}
      >
        <CardContent
          sx={{
            borderRight: {
              xs: "0",
              sm: "1px solid rgba(0,0,0,0.1)",
            },
          }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              backgroundColor: "success" + ".light",
              color: "success" + ".main",
            }}
          >
            <IconLockOpen size={24} />
          </Avatar>

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Typography variant="h3">{openprojects}</Typography>
            <Typography color="error.profit" variant="caption"></Typography>
          </Stack>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            Open Projects
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  </BlankCard>
);

export default TopCards;
