import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import useCharacters from "./useCharacters";
import { QueryClient, QueryClientProvider } from "react-query";
import { marvelApiRequest } from "~/lib/requests";

jest.mock("~/lib/requests");

const queryClient = new QueryClient();
const mockResults = [
  {
    id: 1,
    name: "mock name",
    description: "mock description",
    thumbnail: {
      path: "mock path",
      extension: "mock extension",
    },
  },
];

describe("useCharacters", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    queryClient.clear();
    (marvelApiRequest as jest.Mock).mockResolvedValue({
      data: {
        results: mockResults,
        total: 100,
      },
    });
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapper = ({ children }: { children: any }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("should return the correct data", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCharacters(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.characters).toEqual(mockResults);
  });

  it("should set isLoading", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCharacters(), {
      wrapper,
    });

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });

  it("should set loadMore", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCharacters(), {
      wrapper,
    });

    expect(result.current.loadMore).toBeUndefined();

    await waitForNextUpdate();

    expect(result.current.loadMore).toBeDefined();
  });

  it("should handle loadMore invocation", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCharacters(), {
      wrapper,
    });

    await waitForNextUpdate();

    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      result.current.loadMore!();
    });

    await waitForNextUpdate();

    expect(marvelApiRequest).toHaveBeenCalledTimes(2);
    expect(result.current.characters).toEqual([...mockResults, ...mockResults]);
  });

  it("should set loadMore to undefined if no more data available", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCharacters(), {
      wrapper,
    });

    await waitForNextUpdate();
    expect(result.current.loadMore).toBeDefined();

    (marvelApiRequest as jest.Mock).mockResolvedValue({
      data: {
        results: mockResults,
        total: 40,
      },
    });

    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      result.current.loadMore!();
    });

    await waitForNextUpdate();
    expect(result.current.loadMore).toBeUndefined();
  });
});
