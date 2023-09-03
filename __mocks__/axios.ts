const mockAxios = {
  get: jest.fn(() => {
    return Promise.resolve({
      config: {},
      data: {
        __mocked__: true,
      },
      headers: {},
      status: 200,
      statusText: "OK",
    });
  }),
  post: jest.fn(),
};

export default mockAxios;
