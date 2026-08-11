// Precompiles the site's JSX into plain JS bundles so production doesn't ship
// Babel-in-the-browser (see HANDOFF.md "Performance" section). Run: npm run build
'use strict';
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const root = path.join(__dirname, '..');

const bundles = {
  'app-home.js': [
    'content.jsx', 'Reveal.jsx', 'Hero.jsx', 'Presentation.jsx', 'ProductsSection.jsx',
    'CertificationsSection.jsx', 'ProcessSection.jsx', 'FaqSection.jsx', 'ContactSection.jsx',
    'Footer.jsx', 'Lightbox.jsx', 'WhatsAppFloat.jsx', 'App.jsx',
  ],
  'app-legal.js': [
    'content.jsx', 'legal-content.jsx', 'Footer.jsx', 'WhatsAppFloat.jsx', 'LegalPage.jsx',
  ],
};

for (const [outName, files] of Object.entries(bundles)) {
  const compiled = files.map(file => {
    const src = fs.readFileSync(path.join(root, file), 'utf8');
    const { code } = babel.transform(src, {
      presets: [['@babel/preset-react', { runtime: 'classic' }]],
      filename: file,
      babelrc: false,
      configFile: false,
    });
    return `// ── ${file} ──\n${code}`;
  });
  fs.writeFileSync(path.join(root, outName), compiled.join('\n\n'));
  console.log(`built ${outName} (${files.length} files)`);
}
