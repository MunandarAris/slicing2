import React from "react";

// MUI
import { styled } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";

// constant
import { footer } from "../../constant/fakeData";

// make styles
const WrapperFooter = styled(Container)(({ theme }) => ({
  borderBottom: "1px solid #AFAFB7",
  paddingBottom: "2rem",
  textAlign: "center",
  [theme.breakpoints.only("sm")]: {
    marginTop: "35vw",
  },
  [theme.breakpoints.only("md")]: {
    marginTop: "30vw",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "28vw",
  },
}));
const TextTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
    textAlign: "center",
  },
}));
const TextLink = styled(Typography)(({ theme }) => ({
  fontWeight: "normal",
  margin: ".5rem 0rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".7rem",
    textAlign: "center",
  },
}));
const Copyright = styled(Typography)(({ theme }) => ({
  margin: "1rem 0rem",
  textAlign: "center",
  color: "black",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".7rem",
  },
}));

export default function Footer() {
  return (
    <>
      <WrapperFooter>
        <Grid container justifyContent="center" spacing={5}>
          {footer.map((item, index) => (
            <Grid item key={index} xs={6} md={6} lg={3} sm={3}>
              <TextTitle variant="body1">{item.title}</TextTitle>
              {item.link.map((item, index) => (
                <TextLink key={index} variant="body2">
                  {item}
                </TextLink>
              ))}
            </Grid>
          ))}
        </Grid>
      </WrapperFooter>
      <Copyright variant="body1">
        COPYRIGHT &copy; 2022 - Aris Munandar
      </Copyright>
    </>
  );
}
