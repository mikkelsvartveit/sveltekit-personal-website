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

const photos = fs.readdirSync(INPUT_DIR);
console.log("\nResizing photos...\n");

photos.forEach((photo) => {
  const inputPath = `${INPUT_DIR}/${photo}`;
  const outputPath = `${OUTPUT_DIR}/${photo}`;

  // Create output directory for each photo
  fs.mkdirSync(outputPath);

  // Save metadata
  sharp(inputPath)
    .metadata()
    .then((metadata) => {
      const { width, height } = metadata;
      fs.writeFileSync(
        `${outputPath}/metadata.json`,
        JSON.stringify({ width, height })
      );
    });

  // Generate low-res thumbnail
  sharp(inputPath)
    .resize({ width: 800 })
    .jpeg({
      quality: 70,
      mozjpeg: true,
      progressive: true,
    })
    .toFile(`${outputPath}/thumbnail.jpg`)
    .then(() => {
      console.log(`Created thumbnail for ${photo}`);
    });

  // Generate high quality image for full-screen viewing
  sharp(inputPath)
    .resize({ height: 2000 })
    .jpeg({
      mozjpeg: true,
    })
    .toFile(`${outputPath}/full.jpg`)
    .then(() => {
      console.log(`Created high-res image for ${photo}`);
    });
});
