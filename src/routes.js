/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import AssignmentIcon from '@material-ui/icons/Assignment';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Survey from "views/Survey/Survey.js";
import MatchedHistory from "views/MatchedHistory/MatchedHistory";
import Registraion from "views/LogIn/Registration";
import SurveyHistory from "views/SurveyHistory/SurveyHistory";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HistoryIcon from '@material-ui/icons/History';



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/homepage"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/homepage"
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  {
    path: "/survey",
    name: "Survey",
    icon: AssignmentIcon,
    component: Survey,
    layout: "/homepage"
  },
  {
    path: "/history",
    name: "Survey History",
    icon: HistoryIcon,
    component: SurveyHistory,
    layout: "/homepage"
  },
  {
    path: "/matched-history",
    name: "Matched History",
    icon: EmojiPeopleIcon,
    component: MatchedHistory,
    layout: "/homepage"
  },
  {
    path: "/registration",
    name: "Registraion",
    icon: EmojiPeopleIcon,
    component: Registraion,
    layout: "/homepage"
  },


];

export default dashboardRoutes;
