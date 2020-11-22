/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.js";
import Schedule from "./views/Schedule.js";
import Rooms from "./views/Rooms.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "nc-icon nc-bell-55",
    component: Schedule,
    layout: "/admin",
  },
  {
    path: "/rooms",
    name: "Rooms",
    icon: "nc-icon nc-tile-56",
    component: Rooms,
    layout: "/admin",
  },
];
export default routes;
