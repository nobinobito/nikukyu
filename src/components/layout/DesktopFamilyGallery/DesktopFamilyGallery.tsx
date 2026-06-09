import { readdirSync } from "node:fs";
import { extname } from "node:path";

import { DesktopFamilyGalleryClient } from "./DesktopFamilyGalleryClient";

const GALLERY_DIRECTORY = "public/home/gallery";
const SUPPORTED_EXTENSIONS = new Set([".avif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

function getGalleryPhotos() {
  const galleryDirectoryPath = `${process.cwd()}/${GALLERY_DIRECTORY}`;
  const fileNames = readdirSync(galleryDirectoryPath)
    .filter((fileName) => SUPPORTED_EXTENSIONS.has(extname(fileName).toLowerCase()))
    .sort((firstFileName, secondFileName) => firstFileName.localeCompare(secondFileName));

  return fileNames.map((fileName) => {
    const extension = extname(fileName);
    const alt = fileName.slice(0, -extension.length);

    return {
      alt,
      src: `/home/gallery/${fileName}`,
    };
  });
}

export function DesktopFamilyGallery() {
  return <DesktopFamilyGalleryClient photos={getGalleryPhotos()} />;
}
