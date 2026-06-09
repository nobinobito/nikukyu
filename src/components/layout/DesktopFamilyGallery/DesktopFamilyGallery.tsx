import { DesktopFamilyGalleryClient } from "./DesktopFamilyGalleryClient";
import { getGalleryPhotos } from "./galleryPhotos";

export function DesktopFamilyGallery() {
  return <DesktopFamilyGalleryClient photos={getGalleryPhotos()} />;
}
