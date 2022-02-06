// next js
import dynamic from "next/dynamic";

// MUI
import { styled } from "@mui/system";
import { Box } from "@mui/material";

// import components
const Navbar = dynamic(() => import("../components/Navbar"));
const Banner = dynamic(() => import("../components/Banner"));
const Features = dynamic(() => import("../components/Features"));
const Blog = dynamic(() => import("../components/Blog"));
const Alternative = dynamic(() => import("../components/Alternative"));
const Footer = dynamic(() => import("../components/Footer"));

// make styles
const CustomContainerBanner = styled(Box)(({ theme }) => ({
  background: "url('/images/bg-header.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  height: "110vh",
  position: "relative",
  [theme.breakpoints.only("xs")]: {
    height: "90vh",
  },
  [theme.breakpoints.only("md")]: {
    height: "150vh",
  },
}));
const CustomLayerImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "80%",
  height: "90%",
  left: "50%",
  transform: "translate(-50%, 5%)",
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
  [theme.breakpoints.only("sm")]: {
    width: "70vw",
    height: "80vh",
  },
  [theme.breakpoints.only("md")]: {
    width: "80vw",
    height: "100vh",
  },
}));

export default function Home() {
  return (
    <>
      <CustomContainerBanner>
        <Navbar />
        <Banner />
        <CustomLayerImage src="/images/layerHeader.png" />
      </CustomContainerBanner>
      <Features />
      <Blog />
      <Alternative />
      <Footer />
    </>
  );
}
