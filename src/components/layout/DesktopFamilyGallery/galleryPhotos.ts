import { readdirSync } from "node:fs";
import { extname } from "node:path";

export type GalleryPhoto = {
  alt: string;
  src: string;
};

const GALLERY_DIRECTORY = "public/home/gallery";
const SUPPORTED_EXTENSIONS = new Set([".avif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

function shuffleFileNames(fileNames: string[]) {
  const shuffled = [...fileNames];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const current = shuffled[index];
    shuffled[index] = shuffled[randomIndex];
    shuffled[randomIndex] = current;
  }

  return shuffled;
}

function interleaveFileNames(catFileNames: string[], dogFileNames: string[]) {
  const interleaved: string[] = [];
  const maxLength = Math.max(catFileNames.length, dogFileNames.length);

  for (let index = 0; index < maxLength; index += 1) {
    if (catFileNames[index]) {
      interleaved.push(catFileNames[index]);
    }

    if (dogFileNames[index]) {
      interleaved.push(dogFileNames[index]);
    }
  }

  return interleaved;
}

export function getGalleryPhotos(): GalleryPhoto[] {
  const galleryDirectoryPath = `${process.cwd()}/${GALLERY_DIRECTORY}`;
  const fileNames = readdirSync(galleryDirectoryPath)
    .filter((fileName) => SUPPORTED_EXTENSIONS.has(extname(fileName).toLowerCase()))
    .sort((firstFileName, secondFileName) => firstFileName.localeCompare(secondFileName));

  const catFileNames = shuffleFileNames(
    fileNames.filter((fileName) => fileName.toLowerCase().startsWith("c")),
  );
  const dogFileNames = shuffleFileNames(
    fileNames.filter((fileName) => fileName.toLowerCase().startsWith("d")),
  );
  const otherFileNames = shuffleFileNames(
    fileNames.filter((fileName) => !/^[cd]/i.test(fileName)),
  );
  const orderedFileNames = [
    ...interleaveFileNames(catFileNames, dogFileNames),
    ...otherFileNames,
  ];

  return orderedFileNames.map((fileName) => {
    const extension = extname(fileName);

    return {
      alt: fileName.slice(0, -extension.length),
      src: `/home/gallery/${fileName}`,
    };
  });
}
