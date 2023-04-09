// @ts-expect-error - fs not found error in editor
import fs from "fs";
import type { Load } from "@sveltejs/kit";

export const load: Load = async (): Promise<{ photos: string[] }> => {
  const photos = fs.readdirSync("src/content/photos").map((photo: string) => {
    return photo.split(".").shift();
  });

  return { photos };
};
