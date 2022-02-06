import React from "react";

// MUI
import { styled } from "@mui/system";
import { Box, Container, Grid, Typography } from "@mui/material";

// custom styles
const CustomWrapContainer = styled(Box)(({ theme }) => ({
  background: "url('/images/bg-alternative.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  height: "90vh",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    height: "90vh",
  },
}));
const CustomContainer = styled(Container)(({ theme }) => ({
  paddingTop: "8rem",
  [theme.breakpoints.only("xs")]: {
    paddingTop: "18vh",
  },
  [theme.breakpoints.only("sm")]: {
    paddingTop: "18vh",
  },
  [theme.breakpoints.only("md")]: {
    paddingTop: "18vh",
  },
}));
const CustomTextTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: ".9rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: ".9rem",
  },
}));
const CustomTextDesc = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  marginTop: "1rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
    marginTop: ".8rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.7rem",
    marginTop: "4vh",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.7rem",
    marginTop: "4vh",
  },
}));
const CustomTextRight = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "200",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
    marginTop: ".8rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: ".9rem",
    marginTop: "3vh",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: ".9rem",
    marginTop: "3vh",
  },
}));
const CustomImg = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "80vw",
  height: "auto",
  bottom: "-30vw",
  transform: "translate(-50%, 0%)",
  left: "50%",
  [theme.breakpoints.only("xs")]: {
    bottom: "-20vw",
    width: "100%",
  },
  [theme.breakpoints.only("sm")]: {
    bottom: "-33vw",
    width: "100%",
  },
  [theme.breakpoints.only("md")]: {
    bottom: "-33vw",
    width: "100%",
  },
}));

export default function Alternative() {
  return (
    <CustomWrapContainer>
      <CustomContainer>
        <Grid container alignItems="center" justifyContent="space-around">
          <Grid item xs={12} md={6} lg={6}>
            <CustomTextTitle variant="body1">ALTERNATIVES</CustomTextTitle>
            <CustomTextDesc variant="h4">
              Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!
            </CustomTextDesc>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <CustomTextRight variant="body1">
              Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya.
              Barangkali lo udah serius gitu butuh tool untuk sosial media, maka
              dari itu kita kasih 2 alternatif yang bisa lo pake untuk sosial
              media lo.
            </CustomTextRight>
          </Grid>
        </Grid>
      </CustomContainer>

      <CustomImg src="../../images/aletrnative-img.png" />
    </CustomWrapContainer>
  );
}
