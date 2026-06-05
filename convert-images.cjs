const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';

const files = fs.readdirSync(inputDir).filter(f => 
  f.match(/\.(jpg|jpeg|png)$/i)
);

console.log(`Found ${files.length} images. Converting...`);

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(inputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`✅ ${file} → ${file.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`);
  }
  console.log('🎉 All images converted to WebP!');
})();