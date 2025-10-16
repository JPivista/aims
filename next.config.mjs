/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'docs-aims.ivista.biz',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
        domains: ["docs.theaims.ac.in"],
    },
};

export default nextConfig;
