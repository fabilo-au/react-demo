import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { XMEN_SERIES_ID } from "~/constants";
import { buildQueryKey } from "~/lib/reactQuery";
import { marvelApiRequest } from "~/lib/requests";
import { Character } from "~/lib/types";

const useCharacters = () => {
  const limit = 20;
  const [characters, setCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(0);

  const loadMore = useCallback(() => {
    setOffset((prevOffset) => prevOffset + limit);
  }, []);

  const params: { [key: string]: number | string } = {
    series: XMEN_SERIES_ID,
    offset,
  };
  const queryKey = buildQueryKey("characters", params);

  const { data, isLoading, error } = useQuery(queryKey, () =>
    marvelApiRequest(`characters`, params),
  );

  const showLoadMore = data?.data?.total > offset + limit;

  useEffect(() => {
    if (!data?.data?.results) {
      return;
    }
    setCharacters((prevCharacters) => [
      ...prevCharacters,
      ...(data?.data?.results as Character[]),
    ]);
  }, [data]);

  return {
    characters,
    isLoading,
    error,
    loadMore: showLoadMore ? loadMore : undefined,
  };
};

export default useCharacters;
