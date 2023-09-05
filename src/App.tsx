import React from "react";
import Box from "@mui/material/Box";
import { AppBar } from "./components";
import { Route, Routes } from "react-router-dom";
import { CharacterListPage } from "./pages";

const App = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar />
      </Box>
      <Routes>
        <Route path="/" element={<CharacterListPage />} />
        <Route path="characters" element={<CharacterListPage />} />
      </Routes>
    </div>
  );
};

export default App;
