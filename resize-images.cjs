const sharp = require('sharp');

const resize = [
  ['hero-visual', 700, 700],
  ['hero-bg', 1440, 800],
  ['about-workspace', 1440, 800],
  ['global-reach', 1440, 800],
  ['strategy-visual', 800, 600],
  ['portfolio-restaurant', 800, 450],
  ['portfolio-contractor', 800, 450],
  ['portfolio-salon', 800, 450],
  ['portfolio-seo', 800, 450],
  ['portfolio-ads', 800, 450],
  ['portfolio-social', 800, 450],
  ['portfolio-app1', 800, 450],
  ['portfolio-app2', 800, 450],
  ['portfolio-dental', 800, 450],
  ['service-web', 600, 600],
  ['service-seo', 600, 600],
  ['service-google-ads', 600, 600],
  ['service-social', 600, 600],
  ['service-meta', 600, 600],
  ['service-app', 600, 600],
  ['process-discovery', 320, 320],
  ['process-strategy', 320, 320],
  ['process-building', 320, 320],
  ['process-growth', 320, 320],
  ['client-1', 120, 120],
  ['client-2', 120, 120],
  ['client-3', 120, 120],
  ['client-4', 120, 120],
  ['client-5', 120, 120],
  ['client-6', 120, 120],
  ['client-7', 120, 120],
  ['client-8', 120, 120],
  ['client-9', 120, 120],
  ['founder', 160, 160],
];

(async () => {
  for (const [name, w, h] of resize) {
    await sharp(`public/images/${name}.webp`)
      .resize(w, h, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(`public/images/${name}_new.webp`);
    console.log(`✅ ${name} → ${w}x${h}`);
  }
  console.log('🎉 All done!');
})();