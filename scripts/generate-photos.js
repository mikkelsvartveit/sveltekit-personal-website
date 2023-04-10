import fs from "fs";
import sharp from "sharp";

const INPUT_DIR = "src/content/photos";
const OUTPUT_DIR = "static/photos-optimized";

// Remove output directory if it exists
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true });
}

// Create output directory
fs.mkdirSync(`${OUTPUT_DIR}`);
fs.mkdirSync(`${OUTPUT_DIR}/thumbs`);

const photos = fs.readdirSync(INPUT_DIR);
console.log("\nResizing photos...\n");

photos.forEach((photo) => {
  const inputPath = `${INPUT_DIR}/${photo}`;

  // Generate low-res thumbnail
  const thumbnailOutputPath = `${OUTPUT_DIR}/thumbs/${photo}`;
  sharp(inputPath)
    .resize({ width: 800 })
    .jpeg({
      quality: 70,
      mozjpeg: true,
    })
    .toFile(thumbnailOutputPath)
    .then(() => {
      console.log(`Created ${thumbnailOutputPath}`);
    });

  // Generate high quality image for full-screen viewing
  const outputPath = `${OUTPUT_DIR}/${photo}`;
  sharp(inputPath)
    .resize({ height: 2000 })
    .jpeg({
      mozjpeg: true,
    })
    .toFile(outputPath)
    .then(() => {
      console.log(`Created ${outputPath}`);
    });
});
