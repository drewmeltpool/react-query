export const createUrl = (
  ...urls: Array<string | number | undefined | null>
) => {
  const withoutEmpty = urls.filter((url) => url);
  const url = withoutEmpty.join('/');

  return url;
};
