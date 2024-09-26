import { Extension } from "@/shared/domain";

export const parsedURLImage = (thumbnail: string, extension: Extension) => {
  const [protocol, url] = thumbnail.split(":");
  const parsedProtocol = protocol === "https" ? protocol : protocol.concat("s");
  const parsedThumbnail = `${parsedProtocol}:${url}.${extension}`;
  return parsedThumbnail;
};
