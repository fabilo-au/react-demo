import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useAppBar from "./useAppBar";

describe("useAppBar", () => {
  it("should default isMenuOpen to false", () => {
    const { result } = renderHook(() => useAppBar());
    expect(result.current.isMenuOpen).toBe(false);
  });

  it("should set isMenuOpen to true when handleOpenMenu is called", () => {
    const { result } = renderHook(() => useAppBar());
    act(() => {
      result.current.handleOpenMenu({ currentTarget: {} } as React.MouseEvent<
        HTMLButtonElement,
        MouseEvent
      >);
    });
    expect(result.current.isMenuOpen).toBe(true);
  });

  it("should set isMenuOpen to false when handleCloseMenu is called", () => {
    const { result } = renderHook(() => useAppBar());
    act(() => {
      result.current.handleCloseMenu();
    });
    expect(result.current.isMenuOpen).toBe(false);
  });

  it("should set anchorEl to null when handleCloseMenu is called", () => {
    const { result } = renderHook(() => useAppBar());
    act(() => {
      result.current.handleCloseMenu();
    });
    expect(result.current.anchorEl).toBe(null);
  });

  it("should set anchorEl to the currentTarget when handleOpenMenu is called", () => {
    const { result } = renderHook(() => useAppBar());
    act(() => {
      result.current.handleOpenMenu({ currentTarget: {} } as React.MouseEvent<
        HTMLButtonElement,
        MouseEvent
      >);
    });
    expect(result.current.anchorEl).toEqual({});
  });
});
