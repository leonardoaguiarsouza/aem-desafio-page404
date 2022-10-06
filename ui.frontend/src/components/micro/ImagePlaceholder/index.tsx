import React from "react";
import { Image } from "./style";

type ImgProps = {
  imgPath: string
}

const ImagePlaceholder = ({imgPath}: ImgProps) => {
  return (
    <Image src={imgPath} />
  );
};

export default ImagePlaceholder;