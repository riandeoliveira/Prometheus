/** @type {import('next').NextConfig} */

// FIXME: O Next reconhece o arquivo styles.ts como uma página. Se privar arquivos .ts ele descarta rota /api também. CORRIGIR ISSO !!!

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["tsx", "ts"],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
