import fs from "fs";
import type { ServerLoad } from "@sveltejs/kit";

export const load = (async () => {
  const photos = (await fs.promises.readdir("static/photos-optimized/"))
    .filter((item: string) => !/(^|\/)\.[^/.]/g.test(item)) // Remove hidden files
    .sort((a: string, b: string) => {
      const aNumber = parseInt(a.split(".")[0]);
      const bNumber = parseInt(b.split(".")[0]);
      return bNumber - aNumber;
    })
    .map((src: string) => {
      // Read JSON file
      const { width, height } = JSON.parse(
        fs.readFileSync(`static/photos-optimized/${src}/metadata.json`, "utf8")
      ) as { width: number; height: number };

      return {
        src,
        width,
        height,
      };
    });

  return { photos };
}) satisfies ServerLoad;
