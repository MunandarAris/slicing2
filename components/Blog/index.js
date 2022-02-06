import React from "react";

// MUI
import { Box, Container, Grid, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";

// custom styled
const CustomContainer = styled(Container)(({ theme }) => ({
  marginTop: "6vh",
}));
const TextQuestion = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  fontWeight: "500",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
  },
}));
const TextTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  textAlign: "center",
  fontWeight: "bold",
  margin: "1rem 0rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
  },
}));
const TextDesc = styled(Typography)(({ theme }) => ({
  color: "black",
  textAlign: "center",
  fontWeight: "300",
  lineHeight: "1.7rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
    lineHeight: "1.3rem",
  },
}));
const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f3eae3",
  borderRadius: "10px",
  width: "100%",
}));
const CustomImage = styled("img")(({ theme }) => ({
  width: "25%",
  height: "auto",
  display: "block",
  margin: "auto",
  padding: "2.3rem 0rem",
  [theme.breakpoints.only("xs")]: {
    width: "15%",
  },
}));
const CustomGridWrapper = styled(Grid)(({ theme }) => ({
  marginTop: "1vh",
}));
const TextTitleCard = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  margin: ".3rem 0rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1rem",
  },
}));
const TextDescCard = styled(Typography)(({ theme }) => ({
  fontWeight: "300",
  lineHeight: "1.4rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
    lineHeight: "1.2rem",
  },
}));

// fake data
import { blog } from "../../constant/fakeData";

export default function Blog() {
  return (
    <>
      <CustomContainer maxwidth="lg">
        <TextQuestion variant="body1">TERUS GIMANA?</TextQuestion>

        {/* tampilan jika medium ke atas */}
        <Hidden smDown>
          <TextTitle variant="h4">
            Terus Ngapain Dong Kalo Nggak Ada <br /> Insight Apapun?
          </TextTitle>

          <TextDesc variant="body1">
            Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga
            kemungkinan <br /> kenapa lo bisa ada di website ini. Ketiga
            kemungkinan itu akan gwej jabarkan di <br /> bawah ini dengan
            ilustrasinya hehehe.
          </TextDesc>
        </Hidden>

        {/* tampilan jika small ke bawah */}
        <Hidden smUp>
          <TextTitle variant="h4">
            Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?
          </TextTitle>

          <TextDesc variant="body1">
            Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga
            kemungkinan kenapa lo bisa ada di website ini. Ketiga kemungkinan
            itu akan gwej jabarkan di bawah ini dengan ilustrasinya hehehe.
          </TextDesc>
        </Hidden>

        <CustomGridWrapper container spacing={5} justifyContent="center">
          {blog.map((item, index) => (
            <Grid item md={3} sm={4} key={index}>
              <CustomBox>
                <CustomImage src={item.img} />
              </CustomBox>
              <TextTitleCard variant="body1">{item.title}</TextTitleCard>
              <TextDescCard variant="body2">{item.desc}</TextDescCard>
            </Grid>
          ))}
        </CustomGridWrapper>
      </CustomContainer>
    </>
  );
}
