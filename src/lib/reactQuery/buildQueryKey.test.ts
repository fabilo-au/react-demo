import buildQueryKey from "./buildQueryKey";

describe("buildQueryKey", () => {
  it("should build a query key", () => {
    const prefix = "characters";
    const params = {
      series: 123,
      foo: "bar",
      offset: 0,
    };

    expect(buildQueryKey(prefix, params)).toEqual(
      "characters-series:123-foo:bar-offset:0",
    );
  });
});
