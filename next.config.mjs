/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración para imágenes remotas
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
  // Configuración para assets estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  // Desactivar la compresión de imágenes para evitar problemas
  compress: true,
  // Configuración para el manejo de archivos multimedia
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
  // Configuración para el entorno de producción
  productionBrowserSourceMaps: true,
  // Configuración para evitar caché
  generateEtags: false,
};

export default nextConfig;
