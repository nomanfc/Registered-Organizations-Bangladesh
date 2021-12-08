import { FcHome } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";

import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';

export const SideLinksDash = [
  { name: "ড্যাশবোর্ড", link: "/", icon: <DashboardCustomizeSharpIcon style={{ color: "#099F19" }} /> },
];

export const SideLinksOrg = [
  { name: "প্রতিষ্ঠান সমূহ", link: "allorg" },
  { name: "প্রতিষ্ঠান নিবন্ধন", link: "addorg" },
];

export const SideLinksUsers = [
  { name: "সকল বাবহারকারী", link: "allusers" },
  { name: "ব্যবহারকারী নিবন্ধন", link: "adduser" },
];

export const SideLinksDown = [
  // { name: "Settings", link: "#settings", icon: <FcSettings /> },
];
