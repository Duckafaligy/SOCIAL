// Edit this file to update everything shown on the site.

export const profile = {
  name: "Brendan Lau",
  tagline: "15 year old • Pierre Elliott Trudeau H.S. • Developer",
  // Profile photo in /public, cropped square.
  photo: "/avatar.jpg",
};

export type LinkKind = "phone" | "instagram" | "linkedin" | "github" | "gmail";

export type SocialLink = {
  kind: LinkKind;
  label: string;
  // What's shown under the label (handle, number, address).
  display: string;
  href: string;
};

export const links: SocialLink[] = [
  {
    kind: "phone",
    label: "Phone",
    display: "647-618-7233 · Save contact",
    href: "/brendan-lau.vcf",
  },
  {
    kind: "instagram",
    label: "Instagram",
    display: "@Duckafaligy",
    href: "https://www.instagram.com/duckafaligy",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    display: "Brendan Lau",
    href: "https://www.linkedin.com/in/brendan-lau-4654b43a0",
  },
  {
    kind: "github",
    label: "GitHub",
    display: "@Duckafaligy",
    href: "https://github.com/Duckafaligy",
  },
  {
    kind: "gmail",
    label: "Gmail",
    display: "brendanhllau@gmail.com",
    href: "mailto:brendanhllau@gmail.com",
  },
];
