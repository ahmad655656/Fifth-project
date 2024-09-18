import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useParams } from "react-router-dom";
import {
  BMWModels2024,
  MercedesBenzModels2024,
  RangeRoverModels2024,
} from "../../Data";

export default function ImageListDetails() {
  const { id } = useParams();

  const productD =
    MercedesBenzModels2024.find((el) => el.id === parseInt(id)) ||
    BMWModels2024.find((el) => el.id === parseInt(id)) ||
    RangeRoverModels2024.find((el) => el.id === parseInt(id));

  if (!productD) {
    return <div>Product not found</div>;
  }

  if (!Array.isArray(productD.images)) {
    return <div>No images available</div>;
  }

  return (
    <ImageList className="w-[100%] sm:max-md:mx-auto overflow-scroll no-scrollbar" cols={3} rowHeight={164}>
      {productD.images.map((image, index) => (
        <ImageListItem key={index}>
          <img className="w-[100px] h-[100%] object-cover" src={image} alt={`image-${index}`} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
