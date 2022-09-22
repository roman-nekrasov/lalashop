export const changeLayout = (layout: string) => {
  const currUrl = window.location.href;
  const url = new URL(currUrl);

  url.searchParams.delete("layout");
  url.searchParams.append("layout", layout);

  window.history.pushState(null, "", url.toString());
};
