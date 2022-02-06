import React from "react";

// MUI
import { Grid, Container, Typography, Button } from "@mui/material";
import { Box, styled } from "@mui/system";

// icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Custom Styles
const CustomContainer = styled(Container)(({ theme }) => ({
  marginTop: "25rem",
  [theme.breakpoints.only("xs")]: {
    marginTop: "-10vh",
  },
  [theme.breakpoints.only("sm")]: {
    marginTop: "39vh",
  },
  [theme.breakpoints.only("md")]: {
    marginTop: "39vh",
  },
}));
const CustomTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.6rem",
  },
}));
const CustomQuestion = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
  },
}));
const CustomTextContent = styled(Typography)(({ theme }) => ({
  margin: "1.3rem 0rem",
}));
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  color: "#fff",
  textTransform: "none",
  padding: ".4rem 1rem",
  "&:hover": {
    backgroundColor: "black",
  },
}));
const CustomArrowRight = styled(ArrowForwardIcon)(({ theme }) => ({
  fontSize: ".9rem",
  marginLeft: ".3rem",
}));
const CustomGrid1 = styled(Grid)(({ theme }) => ({
  backgroundColor: "black",
  color: "#fff",
  padding: "1.5rem",
  borderRadius: "10px",
  [theme.breakpoints.only("xs")]: {
    marginBottom: "1.8rem",
  },
}));
const CustomBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
const CustomIcons = styled("img")(({ theme }) => ({
  width: "15%",
  marginRight: ".7rem",
  height: "auto",
}));
const TextDesc = styled(Typography)(({ theme }) => ({
  fontWeight: "200",
  marginTop: ".8rem",
}));
const TextDescTwo = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  marginTop: ".8rem",
  lineHeight: "1.5rem",
}));
const CustomGrid2 = styled(Grid)(({ theme }) => ({
  marginTop: "5vh",
}));

export default function Features() {
  return (
    <CustomContainer maxwidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={12} md={5} sm={12}>
          <CustomQuestion variant="body1">KENAPA SIH?</CustomQuestion>
          <CustomTitle variant="h4">
            Kenapa Kami Tidak Memberikan Insight Apapun?
          </CustomTitle>
          <CustomTextContent variant="body2">
            Di sini kita akan klarifikasi mengapa kita tidak memberikan insight
            apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan
            semata-mata ingin menyelamatkan planet bumi.
          </CustomTextContent>
          <CustomButton>
            Pelajari Lebih Lanjut <CustomArrowRight />
          </CustomButton>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container justifyContent="space-around" alignItems="center">
            <CustomGrid1 item xs={12} md={5} sm={5}>
              <CustomBoxWrapper>
                <CustomIcons src="/images/db.png" /> Database
              </CustomBoxWrapper>
              <TextDesc variant="body2">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </TextDesc>
            </CustomGrid1>
            <Grid item xs={12} md={5} sm={5}>
              <CustomBoxWrapper>
                <CustomIcons src="/images/server.png" /> Server
              </CustomBoxWrapper>
              <TextDescTwo variant="body2">
                Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis
                server harus idup terus, itu butuh listrik!
              </TextDescTwo>
            </Grid>

            <CustomGrid2
              container
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item xs={12} md={5} sm={5}>
                <CustomBoxWrapper>
                  <CustomIcons src="/images/listrik.png" /> Listrik
                </CustomBoxWrapper>
                <TextDescTwo variant="body2">
                  Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis
                  server harus idup terus, itu butuh listrik!
                </TextDescTwo>
              </Grid>
              <Grid item xs={12} md={5} sm={5}>
                <CustomBoxWrapper>
                  <CustomIcons src="/images/lingkungan.png" /> Server
                </CustomBoxWrapper>
                <TextDescTwo variant="body2">
                  Pokoknya nggak bagus lah buat lingkungan, ini alesan kita
                  kenapa gak kasih insight. Demi menyelamatkan bumi!
                </TextDescTwo>
              </Grid>
            </CustomGrid2>
          </Grid>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}
