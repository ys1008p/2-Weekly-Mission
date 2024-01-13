/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "codeit-images.codeit.com",
    ],
  },
};
