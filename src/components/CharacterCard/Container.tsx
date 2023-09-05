import { Box, styled } from "@mui/material";

const Container = styled(Box)(() => ({
  backgroundPosition: "center",
  backgroundSize: "cover",
  paddingTop: "120%",
  position: "relative",
  borderRadius: 2,
  boxShadow: "0px -50px 100px 5px rgba(0,0,0,1) inset",
}));

export default Container;
