import React from "react";
import Box from "@mui/material/Box";
import { AppBar } from "./components";

const App = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar />
      </Box>
    </div>
  );
};

export default App;
