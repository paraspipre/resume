/** @type {import('next').NextConfig} */
const nextConfig = {
   async redirects() {
      return [
         {
            source: "/",
            destination: "https://drive.google.com/file/d/1cc9J15MXnocfat5bajBalvtuaihqwRun/view",
            permanent: true,
         },
      ];
   },
};

module.exports = nextConfig;
