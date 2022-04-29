export const getUrlWithParams = (query: any, endpoint: string): string => {
  const url = new URL(`${process.env.REACT_APP_API_BASEURL}${endpoint}`);
  const params = new URLSearchParams(url.search.slice(1));
  Object.keys(query).forEach((key) => {
    if (key === 'page') {
      params.append(key, `${query[key]}`);
      return;
    }

    params.append(key, query[key]);
  });

  return url.href + '?' + params.toString();
};

export const getParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlSearchParams.entries());
};
