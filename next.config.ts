import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the contact card so phones open it as "Add Contact".
  async headers() {
    return [
      {
        source: "/:file*.vcf",
        headers: [
          { key: "Content-Type", value: "text/vcard; charset=utf-8" },
          { key: "Content-Disposition", value: 'inline; filename="Brendan Lau.vcf"' },
        ],
      },
    ];
  },
};

export default nextConfig;
