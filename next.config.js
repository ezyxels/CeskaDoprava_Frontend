/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    //loader: "custom",
    domains: ["localhost", "ceskadoprava-bucket.s3.eu-central-1.amazonaws.com"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 1024, 2048],
    deviceSizes: [352, 640, 768, 992, 1280, 1600, 1920, 2048, 3840],
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
};

module.exports = nextConfig;
