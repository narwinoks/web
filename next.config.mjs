/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'i.scdn.co', // <-- Daftarkan hostname dari Spotify
            port: '',
            pathname: '/**', // Izinkan semua path dari hostname ini
        },
        ],
    },
};

export default nextConfig;
