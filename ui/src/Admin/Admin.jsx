import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupIcon from "@mui/icons-material/Group";
import SellIcon from "@mui/icons-material/Sell";
import PostAddIcon from "@mui/icons-material/PostAdd";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BallotIcon from "@mui/icons-material/Ballot";
const menu = [
  { name: "Dashboard", path: "/admin", icon: <SpaceDashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <SellIcon /> },
  { name: "Customers", path: "/admin/Allusers", icon: <GroupIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <BallotIcon /> },
  { name: "AddProduct", path: "/admin/productsAdd", icon: <PostAddIcon /> },
];
//routes List
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Admin/components/Dashboard";
import ProductsTable from "../Admin/components/ProductsTable";
import Orderstable from "../Admin/components/Orderstable";
import CustomersTable from "../Admin/components/CustomersTable";
import CreateProduct from "../Admin/components/CreateProduct";
import Navbar from "../customer/components/Navbar/Navbar";
function Admin() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        bgcolor:'#2F363F',
        color:'white'

      }}
    >
      {/*isLargeScreen && <Toolbar />*/}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
            sx={{bgcolor:'#2F363F'}}
          >
            <ListItemButton>
              <ListItemIcon sx={{color:'white'}}>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem
        disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{color:'white'}}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
        disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{color:'white'}}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>Request</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="py-15">
      <Navbar/>
      <div className="flex h-[100vh]">
        <CssBaseline />
        <div className="w-[15%] h-full border border-r-gray-300 fixed ">{drawer}</div>
        <div className="w-[85%] h-full ml-[15%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsTable />} />
            <Route path="/orders" element={<Orderstable />} />
            <Route path="/Allusers" element={<CustomersTable />} />
            <Route path="/productsAdd" element={<CreateProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
