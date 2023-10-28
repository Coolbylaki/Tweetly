/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.stack.imgur.com",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
			},
		],
	},
};

module.exports = nextConfig;
