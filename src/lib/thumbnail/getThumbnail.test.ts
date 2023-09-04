import getThumbnail from "./getThumbnail";

describe("getThumbnail", () => {
  it("should return the full thumbnail path", () => {
    const thumbnail = {
      path: "the.mock.path",
      extension: "jpg",
    };
    const result = getThumbnail(thumbnail);
    expect(result).toBe("the.mock.path.jpg");
  });
});
