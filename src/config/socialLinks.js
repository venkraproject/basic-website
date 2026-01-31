/**
 * Centralized social media links configuration.
 * Redirect pages (fb.html, ig.html, wa.html) are auto-generated at build time.
 */
const socialLinks = {
  facebook: {
    url: "https://www.facebook.com/Venkra.co/",
    redirect: "fb",
    title: "Facebook",
  },
  instagram: {
    url: "https://www.instagram.com/venkra.co/",
    redirect: "ig",
    title: "Instagram",
  },
  messenger: {
    url: "https://m.me/Venkra.co",
  },
  whatsapp: {
    url: "https://wa.me/message/PLACEHOLDER",
    redirect: "wa",
    title: "WhatsApp",
  },
};

export default socialLinks;
