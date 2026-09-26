// Edit this file to update everything shown on the site.

export const profile = {
  name: "Your Name",
  tagline: "Developer · Builder · Always learning",
  // Initials shown in the avatar circle.
  initials: "YN",
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
    display: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    kind: "instagram",
    label: "Instagram",
    display: "@yourhandle",
    href: "https://instagram.com/yourhandle",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    display: "in/yourname",
    href: "https://www.linkedin.com/in/yourname",
  },
  {
    kind: "github",
    label: "GitHub",
    display: "@duckafaligy",
    href: "https://github.com/duckafaligy",
  },
  {
    kind: "gmail",
    label: "Gmail",
    display: "you@gmail.com",
    href: "mailto:you@gmail.com",
  },
];
