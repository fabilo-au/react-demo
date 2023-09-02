import axios from 'axios';
import * as constants from '~/constants';
import md5 from 'md5';
import { timestamp } from '~/lib/date';

const marvelApiRequest = async (url: string, params = {}) => {
  const ts = timestamp();
  const hash = md5(
    `${ts}${constants.MARVEL_API_PRIVATE_KEY}${constants.MARVEL_API_PUBLIC_KEY}`,
  );

  const response = await axios.get(`${constants.MARVEL_API_URL}/${url}`, {
    params: {
      ...params,
      apikey: constants.MARVEL_API_PUBLIC_KEY,
      ts,
      hash,
    },
  });

  return response.data;
};

export default marvelApiRequest;
