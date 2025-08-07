import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Toolbar from "@mui/material/Toolbar";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useState, useEffect } from "react";
import { Logout } from "@mui/icons-material";
import { motion } from "framer-motion";

const drawerWidth = 240;

const SideNavBar = ({ window, children, pageName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const MotionListItemButton = motion(ListItemButton);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleLogout = () => {
    window.location.href = "/signIn";
  };

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    setSelectedItem(
      {
        "": "Dashboard",
      }[path] || "Dashboard"
    );
  }, [location]);

  const icons = {
    Dashboard: <DashboardIcon />,
    Logout: <Logout />,
  };

  const routes = [
    { text: "Dashboard", path: "" },
    { text: "Logout", path: "#" },
  ];

  const drawer = (
    <div style={{ height: "85%" }}>
      <Toolbar>
        {/* <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{ cursor: "pointer", width: "160px", mx: "auto" }}
          onClick={() => navigate("")}
        /> */}
        logo here
      </Toolbar>
      <Divider sx={{ mb: 2 }} />
      <List sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {routes.map(({ text, path }) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ mt: text === "Logout" ? "auto" : 0 }}
          >
            <MotionListItemButton
              component={Link}
              to={text !== "Logout" ? path : undefined}
              onClick={() => {
                if (text === "Logout") handleLogout();
                setSelectedItem(text);
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              sx={{
                mx: 1.5,
                my: 0.5,
                px: 2,
                py: 1.2,
                borderRadius: "12px",
                backgroundColor:
                  text === "Logout"
                    ? "#ffe5e5"
                    : selectedItem === text
                      ? "#1995AD"
                      : "transparent",
                color:
                  text === "Logout"
                    ? "#d32f2f"
                    : selectedItem === text
                      ? "#fff"
                      : "#334155",
                fontWeight: 600,
                boxShadow:
                  text === "Logout"
                    ? "0px 3px 8px rgba(211, 47, 47, 0.3)"
                    : selectedItem === text
                      ? "0px 3px 10px rgba(25, 149, 173, 0.3)"
                      : "none",
                "&:hover": {
                  backgroundColor:
                    text === "Logout" ? "#ffe5e5" : "rgba(25, 149, 173, 0.1)",
                  color: text === "Logout" ? "#d32f2f" : "#1995AD",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    selectedItem === text
                      ? "#fff"
                      : text === "Logout"
                        ? "#d32f2f"
                        : "inherit",
                }}
              >
                {icons[text]}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ sx: { fontWeight: 600 } }}
              />
            </MotionListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#ffffff",
          boxShadow: "none",
        }}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#ffffff",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            width: 240,
            height: "95vh",
            background: "linear-gradient(to bottom right, #ffffff, #f0f8fa)",
            borderRadius: 4,
            boxShadow: "0px 0px 20px rgba(10, 11, 11, 0.5)",
            zIndex: 1200,
            overflow: "hidden",
          }}
        >
          {drawer}
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};

export default SideNavBar;
