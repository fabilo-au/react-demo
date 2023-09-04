import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

const mockAnchorEl = document.createElement("div");
const mockHandleCloseMenu = jest.fn();

describe("Menu", () => {
  it('should call handleCloseMenu and navigate to "/characters" when menu item is clicked', () => {
    render(
      <Menu
        anchorEl={mockAnchorEl}
        isMenuOpen={true}
        handleCloseMenu={mockHandleCloseMenu}
      />,
    );

    screen.getByRole("menuitem", { name: "Characters" }).click();
    expect(mockHandleCloseMenu).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/characters");
  });
});
