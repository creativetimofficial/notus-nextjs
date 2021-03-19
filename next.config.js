module.exports = {
  assetPrefix:
  process.env.NODE_ENV === "production"
  ? "/notus-nextjs"
  : "",
  images: {
    loader: 'imgix',
    path: 'https://demos.creative-tim.com/notus-nextjs/',
  },
};
