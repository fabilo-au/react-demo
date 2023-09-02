import axios from 'axios';
import marvelApiRequest from './marvelApiRequest';
import md5 from 'md5';

jest.mock('~/constants', () => ({
  MARVEL_API_PRIVATE_KEY: 'mock-private-key',
  MARVEL_API_PUBLIC_KEY: 'mock-public-key',
  MARVEL_API_URL: 'http://mockapi',
}));
jest.mock('~/lib/date', () => ({
  timestamp: jest.fn(() => 'mock-date'),
}));
jest.mock('md5', () => jest.fn(() => 'mock-hash'));

describe('marvelApiRequest', () => {
  it('calls axios.get with the correct url', () => {
    marvelApiRequest('characters');

    expect(axios.get).toHaveBeenCalledWith(
      'http://mockapi/characters',
      expect.objectContaining({}),
    );
  });

  it('calls axios.get with the api key', () => {
    marvelApiRequest('characters');

    expect(axios.get).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        params: expect.objectContaining({
          apikey: 'mock-public-key',
        }),
      }),
    );
  });

  it('calls axios.get with timestamp', () => {
    marvelApiRequest('characters');

    expect(axios.get).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        params: expect.objectContaining({
          ts: 'mock-date',
        }),
      }),
    );
  });

  it('calls axios.get with hash', () => {
    marvelApiRequest('characters');

    expect(axios.get).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        params: expect.objectContaining({
          hash: 'mock-hash',
        }),
      }),
    );

    expect(md5 as jest.Mock).toHaveBeenCalledWith(
      'mock-datemock-private-keymock-public-key',
    );
  });
});
