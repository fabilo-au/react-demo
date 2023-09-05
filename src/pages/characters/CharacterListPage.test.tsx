import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterListPage from "./CharacterListPage";
import { useCharacters } from "~/hooks";

jest.mock("~/hooks");
jest.mock("~/components", () => ({
  CharacterCard: ({ character: { name } }: { character: { name: string } }) => (
    <div>{name}</div>
  ),
}));

describe("CharacterListPage", () => {
  it("displays a list of characters", () => {
    const characters = [
      { id: 1, name: "Aaron Rodgers" },
      { id: 2, name: "Josh Allen" },
    ];
    (useCharacters as jest.Mock).mockReturnValue({
      characters,
      isLoading: false,
      loadMore: jest.fn(),
    });
    render(<CharacterListPage />);
    expect(screen.getByText("Aaron Rodgers")).toBeInTheDocument();
    expect(screen.getByText("Josh Allen")).toBeInTheDocument();
  });

  it.each`
    label                             | isLoading
    ${"displays a loading indicator"} | ${true}
    ${"hides loading indicator"}      | ${false}
  `("$label", ({ isLoading }) => {
    (useCharacters as jest.Mock).mockReturnValue({
      characters: [],
      isLoading,
      loadMore: jest.fn(),
    });
    render(<CharacterListPage />);
    expect(screen.queryAllByRole("progressbar").length).toBe(isLoading ? 1 : 0);
  });

  it.each`
    label                          | loadMore
    ${"displays load more button"} | ${jest.fn}
    ${"hides load more button"}    | ${undefined}
  `("$label", ({ loadMore }) => {
    (useCharacters as jest.Mock).mockReturnValue({
      characters: [],
      isLoading: false,
      loadMore,
    });
    render(<CharacterListPage />);
    expect(screen.queryAllByText("Load More").length).toBe(loadMore ? 1 : 0);
  });
});
