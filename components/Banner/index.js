import React from "react";

// MUI
import { styled } from "@mui/system";
import { Button, Container, Hidden, Typography } from "@mui/material";

// icons
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// make styles
const CustomCotainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
}));
const TextTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "500",
  marginTop: "2.8rem",
  letterSpacing: "1px",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".7rem",
    marginTop: "5vh",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: ".7rem",
    marginTop: "5vh",
  },
}));
const TextDescOne = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "500",
  letterSpacing: "1px",
  marginTop: "1rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
    marginTop: "1rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.8rem",
    marginTop: "1vw",
  },
}));
const TextDescTwo = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "300",
  letterSpacing: "1px",
  marginTop: "1.5rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
    marginTop: "1rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: ".8rem",
    marginTop: "4vh",
  },
}));
const BtnStartNow = styled(Button)(({ theme }) => ({
  color: "#fff",
  marginTop: "1.9rem",
  backgroundColor: theme.palette.primary.main,
  textTransform: "none",
  padding: ".6rem 1.5rem",
  marginRight: ".3rem",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
    marginTop: "1.5rem",
    padding: ".5rem 1rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: ".9rem",
    marginTop: "1.5rem",
    padding: ".5rem 1rem",
  },
}));
const BtnLearnNow = styled(Button)(({ theme }) => ({
  color: "#fff",
  marginTop: "1.9rem",
  textTransform: "none",
  padding: ".6rem 1.5rem",
  marginLeft: ".3rem",
  "&:hover": {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
    marginTop: "1.5rem",
    padding: ".5rem 1rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: ".9rem",
    marginTop: "1.5rem",
    padding: ".5rem 1rem",
  },
}));

export default function Banner() {
  return (
    <CustomCotainer>
      <TextTitle variant="body2">MANA SAYA TAU SAYA KAN PENCURRY</TextTitle>

      {/* content akan tampil jika di buka sm > */}
      <Hidden smDown>
        <TextDescOne variant="h4">
          Social Media Tool Yang Tidak <br /> Akan Memberikan Kamu <br />{" "}
          Insight Apapun
        </TextDescOne>
        <TextDescTwo variant="body2">
          Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan{" "}
          <br />
          memberikan kamu pelbagai insight, karena kami anti-mainstream maka{" "}
          <br /> kami akan melakukan sebaliknya.
        </TextDescTwo>
      </Hidden>

      {/* content akan tampil jika di buka sm < */}
      <Hidden smUp>
        <TextDescOne variant="h4">
          Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun
        </TextDescOne>
        <TextDescTwo variant="body2">
          Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan
          memberikan kamu pelbagai insight, karena kami anti-mainstream maka
          kami akan melakukan sebaliknya.
        </TextDescTwo>
      </Hidden>

      <BtnStartNow>Memulai Sekarang</BtnStartNow>
      <BtnLearnNow>
        <PlayCircleOutlineIcon sx={{ marginRight: ".3rem" }} /> Pelajarin Dulu
      </BtnLearnNow>
    </CustomCotainer>
  );
}
