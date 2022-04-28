export const getTitle = (page: string | undefined) => {
  if (!page) {
    return;
  }

  return `Diverseup: ${page}`;
};
