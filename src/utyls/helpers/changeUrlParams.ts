export const changeUrlParams = (param: string, value: string) => {
  const currUrl = window.location.href;
  const url = new URL(currUrl);

  url.searchParams.delete(param);
  url.searchParams.append(param, value);

  window.history.pushState(null, "", url.toString());
};
