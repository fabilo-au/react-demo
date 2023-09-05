const buildQueryKey = (
  prefix: string,
  params: { [key: string]: string | number },
) =>
  Object.keys(params).reduce(
    (acc: string, key: string) => `${acc}-${key}:${params[key]}`,
    prefix,
  );

export default buildQueryKey;
