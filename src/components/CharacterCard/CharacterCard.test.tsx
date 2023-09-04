import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterCard from "./CharacterCard";

const mockCharacter = {
  id: 123,
  name: "Mock Name",
  description: "Mock Description",
  thumbnail: {
    path: "mockPath",
    extension: ".jpg",
  },
};

describe("CharacterCard", () => {
  it("should show character name", () => {
    render(<CharacterCard character={mockCharacter} />);
    expect(screen.getByText("Mock Name")).toBeInTheDocument();
  });
});
