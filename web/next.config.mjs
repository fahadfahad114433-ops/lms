/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: sirf HTML/JS/CSS build hoti hai (shared hosting compatible)
  output: "export",
  reactStrictMode: true,
  // Static export ke sath image optimization server-side nahi hoti
  images: { unoptimized: true },
};

export default nextConfig;
