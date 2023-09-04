import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppBar } from "..";
import Menu from "./Menu";

jest.mock("~/constants", () => ({
  APP_NAME: "Mock App Name",
}));

const mockHandleOpenMenu = jest.fn();
const mockHandleCloseMenu = jest.fn();
jest.mock("./hooks/useAppBar", () => ({
  __esModule: true,
  default: () => ({
    handleOpenMenu: mockHandleOpenMenu,
    handleCloseMenu: mockHandleCloseMenu,
    isMenuOpen: false,
    anchorEl: null,
  }),
}));

jest.mock("./Menu", () => {
  return jest.fn().mockImplementation(() => <div>Mock Menu</div>);
});

describe("AppBar", () => {
  it("should show app name", () => {
    render(<AppBar />);
    expect(screen.getByText("Mock App Name")).toBeInTheDocument();
  });

  describe("navigation menu", () => {
    it("should call handleOpenMenu when menu button is clicked", () => {
      render(<AppBar />);
      screen.getByRole("button", { name: "open drawer" }).click();
      expect(mockHandleOpenMenu).toHaveBeenCalled();
    });

    it("should pass correct props to Menu component", () => {
      render(<AppBar />);
      screen.getByRole("button", { name: "open drawer" }).click();
      expect(Menu as jest.Mock).toHaveBeenCalledWith(
        expect.objectContaining({
          anchorEl: null,
          isMenuOpen: false,
          handleCloseMenu: mockHandleCloseMenu,
        }),
        {},
      );
    });
  });
});
