import React from "react";
import { Menu as MuiMenu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  anchorEl: HTMLElement | null;
  isMenuOpen: boolean;
  handleCloseMenu: () => void;
};

const Menu = ({ anchorEl, isMenuOpen, handleCloseMenu }: Props) => {
  const navigate = useNavigate();

  return (
    <MuiMenu
      id="basic-menu"
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleCloseMenu}
      aria-label="main menu"
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem
        onClick={() => {
          handleCloseMenu();
          navigate("/characters");
        }}
      >
        Characters
      </MenuItem>
    </MuiMenu>
  );
};

export default Menu;
