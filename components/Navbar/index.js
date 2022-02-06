import React, { useState } from "react";

// MUI
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Hidden,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

// icons
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

// make styles
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
}));
const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-around",
}));
const Register = styled(Button)(({ theme }) => ({
  color: "#fff",
  marginRight: ".8rem",
  textTransform: "none",
  fontSize: "1rem",
  padding: ".2rem 1.4rem",
  border: "1px solid #fff",
}));
const Login = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "#fff",
  padding: ".3rem 2.3rem",
  textTransform: "none",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "#fff",
  },
}));
const CustomAnchor = styled("a")(({ theme }) => ({
  color: "#fff",
  marginRight: "1rem",
  marginLeft: "1rem",
  fontSize: ".9rem",
  color: "#adb5bd",
  cursor: "pointer",
  transition: ".3s ",
  "&:hover": {
    color: "#fff",
  },
}));
const CustomImage = styled("img")(({ theme }) => ({
  height: "40px",
}));
const Iconbar = styled(DehazeIcon)(({ theme }) => ({
  color: "#fff",
}));
const IconClose = styled(CloseIcon)(({ theme }) => ({
  color: "#fff",
}));

export default function Navbar() {
  // state
  const [drawer, setDrawer] = useState(false);

  // handle drawer
  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <CustomAppBar position="static" elevation={0}>
      {/* Nav Laptop > */}
      <Hidden lgDown>
        <CustomToolbar>
          <CustomImage src="/images/logo.png" alt="MSTSKP" />

          <Box>
            <CustomAnchor>Top</CustomAnchor>
            <CustomAnchor>Features</CustomAnchor>
            <CustomAnchor>Reasons</CustomAnchor>
            <CustomAnchor>Alternatives</CustomAnchor>
          </Box>

          <Box>
            <Register>Mendaftar</Register>
            <Login>Login</Login>
          </Box>
        </CustomToolbar>
      </Hidden>

      {/* Nav laptop < */}
      <Hidden lgUp>
        <CustomToolbar>
          <CustomImage src="/images/logo.png" alt="MSTSKP" />

          <Box>
            {drawer ? (
              <IconClose onClick={handleDrawer} />
            ) : (
              <Iconbar onClick={handleDrawer} />
            )}
          </Box>
        </CustomToolbar>

        {/* Drawer */}
        <SwipeableDrawer
          sx={{ width: "100%" }}
          anchor="left"
          open={drawer}
          onClose={handleDrawer}
          onOpen={handleDrawer}
        >
          <List
            style={{
              width: "200px",
              backgroundColor: "#FC881D",
              height: "100vh",
            }}
          >
            {["Top", "Features", "Reasons", "Alternatives"].map(
              (text, index) => (
                <ListItem button key={index}>
                  <ListItemText
                    primary={text}
                    sx={{
                      color: "#fff",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
        </SwipeableDrawer>
      </Hidden>
    </CustomAppBar>
  );
}
