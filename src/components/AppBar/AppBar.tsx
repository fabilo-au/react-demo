import React from "react";
import {
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as constants from "~/constants";
import { SearchInput } from "~/components";
import useAppBar from "./hooks/useAppBar";
import Menu from "./Menu";

const AppBar = () => {
  const { handleOpenMenu, handleCloseMenu, isMenuOpen, anchorEl } = useAppBar();

  return (
    <>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {constants.APP_NAME}
          </Typography>
          <SearchInput />
        </Toolbar>
      </MuiAppBar>
      <Menu {...{ anchorEl, isMenuOpen, handleCloseMenu }} />
    </>
  );
};

export default AppBar;
