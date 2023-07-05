export const getPagesCount = (postsQuantity, limit) => {
  return Math.ceil(postsQuantity / limit);
};
