import socialLinks, { icons } from '../src/config/socialLinks.js'
import { mainTheme } from '../src/config/themeColors.js'

const colors = mainTheme;

// Generate link cards from socialLinks config
function generateLinkCards(domain = 'venkra.com') {
  const cards = [];

  for (const [key, config] of Object.entries(socialLinks)) {
    const icon = config.icon || icons.website;
    const redirectUrl = config.redirect ? `${domain}/${config.redirect}` : domain;
    cards.push(`
      <a href="${config.url}" target="_blank" rel="noopener noreferrer" class="link-card">
        <div class="link-icon">${icon}</div>
        <div class="link-content">
          <div class="link-title">${config.title}</div>
          <div class="link-url">${redirectUrl}</div>
          <div class="link-text">${config.displayText}</div>
        </div>
      </a>`);
  }

  return cards.join('\n');
}

function generateRedirectHtml(url, title, base) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="1; url=${url}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VENKRA - ${title}</title>
  <link rel="icon" href="${base}favicon.ico">
  <link rel="canonical" href="${url}">
  <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Gothic A1', sans-serif;
      background: ${colors.dark};
      color: ${colors.light};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
    }
    .logo {
      width: 120px;
      margin-bottom: 2rem;
    }
    h1 {
      font-weight: 300;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      color: ${colors.lightAlt};
      font-size: 0.9rem;
    }
    a {
      color: ${colors.highlight};
      text-decoration: none;
    }
    a:hover {
      color: ${colors.light};
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid ${colors.darkAlt};
      border-top-color: ${colors.highlight};
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 2rem;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <img src="${base}assets/logo.svg" alt="Venkra" class="logo" onerror="this.style.display='none'">
  <div class="spinner"></div>
  <h1>Redirigiendo a ${title}...</h1>
  <p>Si no eres redirigido, <a href="${url}">haz clic aquí</a></p>
</body>
</html>`
}

function generateLinktreeHtml(base) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VENKRA - Enlaces</title>
  <meta name="description" content="Encuentra todos los enlaces de VENKRA - Redes sociales y contacto">
  <link rel="icon" href="${base}favicon.ico">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Roboto', sans-serif;
      background: ${colors.dark};
      color: ${colors.light};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem 1.5rem;
    }

    .container {
      max-width: 380px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .logo {
      width: 100%;
      max-width: 540px;
      height: auto;
      filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.5));
      animation: fadeIn 0.8s ease-out;
    }

    .links {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
    }

    .link-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.25rem;
      background: ${colors.darkAlt};
      border: none;
      text-decoration: none;
      color: ${colors.light};
      transition: all 200ms ease;
      animation: slideUp 0.4s ease-out both;
    }

    .link-card:nth-child(1) { animation-delay: 0.1s; }
    .link-card:nth-child(2) { animation-delay: 0.15s; }
    .link-card:nth-child(3) { animation-delay: 0.2s; }
    .link-card:nth-child(4) { animation-delay: 0.25s; }
    .link-card:nth-child(5) { animation-delay: 0.3s; }
    .link-card:nth-child(6) { animation-delay: 0.35s; }

    .link-card:hover {
      background: ${colors.highlight};
      transform: translateY(-2px);
    }

    .link-card:hover .link-url {
      color: ${colors.light};
    }

    .link-card:active {
      transform: translateY(0);
    }

    .link-icon {
      flex-shrink: 0;
    }

    .link-icon svg {
      width: 28px;
      height: 28px;
      fill: currentColor;
    }

    .link-content {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      min-width: 0;
    }

    .link-title {
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      color: ${colors.light};
    }

    .link-url {
      font-size: 0.8rem;
      font-weight: 400;
      color: ${colors.highlight};
      letter-spacing: 0.03em;
    }

    .link-text {
      font-size: 0.85rem;
      font-weight: 400;
      color: ${colors.lightAlt};
    }

    .footer {
      margin-top: 3rem;
      text-align: center;
      animation: fadeIn 0.8s ease-out 0.5s both;
    }

    .footer-icon {
      display: inline-block;
      width: 40px;
      opacity: 0.6;
      transition: opacity 200ms ease;
      color: ${colors.light};
    }

    .footer-icon svg {
      width: 100%;
      height: auto;
      fill: currentColor;
    }

    .footer-icon:hover {
      opacity: 1;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 400px) {
      body {
        padding: 2rem 1rem;
      }

      .logo {
        width: 80%;
      }

      .link-card {
        padding: 0.875rem 1.25rem;
        font-size: 0.9rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <img src="${base}assets/full-logo.png" alt="VENKRA" class="logo">
    </header>

    <nav class="links">
${generateLinkCards()}
    </nav>

    <footer class="footer">
      <a href="${base}" class="footer-icon">
        ${icons.venkra}
      </a>
    </footer>
  </div>
</body>
</html>`
}

export default function socialRedirectsPlugin(base = '/') {
  return {
    name: 'social-redirects',
    generateBundle() {
      // Generate redirect pages
      for (const [key, config] of Object.entries(socialLinks)) {
        if (config.redirect) {
          this.emitFile({
            type: 'asset',
            fileName: `${config.redirect}.html`,
            source: generateRedirectHtml(config.url, config.title, base),
          })
        }
      }

      // Generate linktree page
      this.emitFile({
        type: 'asset',
        fileName: 'linktree.html',
        source: generateLinktreeHtml(base),
      })
    },
  }
}
