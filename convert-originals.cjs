const sharp = require('sharp');

const images = [
  // [filename, width, height, quality]
  ['hero-bg', 1440, 800, 90],
  ['hero-visual', 800, 800, 90],
  ['about-workspace', 1440, 800, 90],
  ['global-reach', 1440, 800, 90],
  ['strategy-visual', 900, 600, 90],
  ['founder', 400, 400, 92],
  ['process-strategy', 500, 500, 90],
  ['process-building', 500, 500, 90],
  ['process-discovery', 500, 500, 90],
  ['process-growth', 500, 500, 90],
  ['service-web', 800, 800, 90],
  ['service-seo', 800, 800, 90],
  ['service-google-ads', 800, 800, 90],
  ['service-social', 800, 800, 90],
  ['service-meta', 800, 800, 90],
  ['service-app', 800, 800, 90],
  ['portfolio-restaurant', 900, 500, 90],
  ['portfolio-contractor', 900, 500, 90],
  ['portfolio-salon', 900, 500, 90],
  ['portfolio-seo', 900, 500, 90],
  ['portfolio-ads', 900, 500, 90],
  ['portfolio-social', 900, 500, 90],
  ['portfolio-app1', 900, 500, 90],
  ['portfolio-app2', 900, 500, 90],
  ['portfolio-dental', 900, 500, 90],
  ['client-1', 300, 300, 92],
  ['client-2', 300, 300, 92],
  ['client-3', 300, 300, 92],
  ['client-4', 300, 300, 92],
  ['client-5', 300, 300, 92],
  ['client-6', 300, 300, 92],
  ['client-7', 300, 300, 92],
  ['client-8', 300, 300, 92],
  ['client-9', 300, 300, 92],
];

(async () => {
  for (const [name, w, h, q] of images) {
    await sharp(`originals/${name}.jpeg`)
      .resize(w, h, { fit: 'cover' })
      .webp({ quality: q })
      .toFile(`public/images/${name}.webp`);
    console.log(`✅ ${name} → ${w}x${h} @ ${q}%`);
  }
  console.log('🎉 All done!');
})();
