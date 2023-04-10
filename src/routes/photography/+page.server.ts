import fs from "fs";
import type { Load } from "@sveltejs/kit";

export const load: Load = async (): Promise<{ photos: string[] }> => {
  const photos = (
    await fs.promises.readdir("static/photos-optimized/", {
      withFileTypes: true,
    })
  )
    .filter((photo: fs.Dirent) => photo.isFile())
    .map((photo: fs.Dirent) => photo.name)
    .sort((a: string, b: string) => {
      const aNumber = parseInt(a.split(".")[0]);
      const bNumber = parseInt(b.split(".")[0]);
      return bNumber - aNumber;
    });

  return { photos };
};
