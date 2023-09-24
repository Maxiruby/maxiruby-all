import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAlertCircle,
  IconAppWindow,
  IconApps,
  IconBasket,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderStyle2,
  IconBorderTop,
  IconBorderVertical,
  IconBox,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconBoxMultiple,
  IconCalendar,
  IconChartArcs,
  IconChartArea,
  IconChartCandle,
  IconChartDonut3,
  IconChartDots,
  IconChartLine,
  IconChartPie,
  IconChartRadar,
  IconCurrencyDollar,
  IconEdit,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconGitMerge,
  IconHelp,
  IconLayout,
  IconLogin,
  IconMail,
  IconMessage2,
  IconNotes,
  IconPackage,
  IconPoint,
  IconRotate,
  IconServer,
  IconSettings,
  IconShoppingBag,
  IconTicket,
  IconUserCircle,
  IconUserPlus,
  IconZoomCode,
  IconReceipt,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconShoppingBag,
    href: "/",
  },

  {
    navlabel: true,
    subheader: "Apps",
  },
  {
    id: uniqueId(),
    title: "Contacts",
    icon: IconPackage,
    chipColor: "secondary",
    href: "/apps/contacts",
  },
  {
    id: uniqueId(),
    title: "All Users",
    icon: IconUserCircle,
    href: "/apps/users",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Holders",
    icon: IconUserCircle,
    href: "/apps/holders",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Project request",
    icon: IconReceipt,
    href: "/apps/projects",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Projects",
    icon: IconPackage,
    href: "/apps/allproject",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Blog",
    icon: IconEdit,
    href: "/forms/blog",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "blogs",
    icon: IconPackage,
    href: "/apps/blog/post",
    chipColor: "secondary",
  },
];

export default Menuitems;
