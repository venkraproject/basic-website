/**
 * Centralized social media links configuration.
 * Redirect pages (fb.html, ig.html, wa.html) are auto-generated at build time.
 */
const socialLinks = {
  facebook: {
    url: "https://www.facebook.com/Venkra.co/",
    contactUrl: "https://m.me/Venkra.co",
    displayText: "venkra.com/fb",
    redirect: "fb",
    title: "Facebook",
  },
  instagram: {
    url: "https://www.instagram.com/venkra.co/",
    contactUrl: "https://www.instagram.com/venkra.co/",
    displayText: "@venkra.co",
    redirect: "ig",
    title: "Instagram",
  },
  whatsapp: {
    url: "https://wa.me/message/QOKZX3EJBF7UD1",
    contactUrl: "https://wa.me/message/QOKZX3EJBF7UD1",
    displayText: "+57 304 6050080",
    redirect: "wa",
    title: "WhatsApp",
  },
};

export default socialLinks;
