import React, { useEffect, useState } from "react";
import { jsPDF } from 'jspdf';  
import canvg from 'canvg';
import {
  BMWModels2024,
  MercedesBenzModels2024,
  RangeRoverModels2024,
} from "../../Data";
import { useParams } from "react-router-dom";
import BigCustomerComment from "../../Components/BigCustomerComment/BigCustomerComment";
import ImageListDetails from "../../Components/ImageListDetails/ImageListDetails";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState("");
  const [productDetails, setProductDetails] = useState("none");
  const [reviews, setReviews] = useState("flex");
  const [base64Image, setBase64Image] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
 
  console.log(product);

  const productD =
    MercedesBenzModels2024.find((el) => el.id === parseInt(id)) ||
    BMWModels2024.find((el) => el.id === parseInt(id)) ||
    RangeRoverModels2024.find((el) => el.id === parseInt(id));
    useEffect(() => {
      if (productD && productD.images[3]) {
        setImgUrl(productD.images[3]);
      }
    }, [productD]);
    
    useEffect(() => {
      const fetchImageAsBase64 = async () => {
        try {
          const response = await fetch(imgUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            setBase64Image(reader.result);
          };
          reader.readAsDataURL(blob);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      };
    
      if (imgUrl) {
        fetchImageAsBase64();
      }
    }, [imgUrl]);
    
  
  if (!productD) {
    return <div>Product not found</div>;
  }
  const handleClick = (b) => {
    document.querySelectorAll(".toggle-btn").forEach((btn) => {
      btn.classList.remove("font-bold");
      btn.classList.remove("text-textFocus");
      btn.classList.remove("border-b-[2px]");
      btn.classList.remove("border-solid");
      btn.classList.remove("border-b-textFocus");
    });
    {
      b.classList.add("font-bold");
      b.classList.add("text-textFocus");
      b.classList.add("border-b-[2px]");
      b.classList.add("border-solid");
      b.classList.add("border-b-textFocus");
    }
  };
 
  const downloadPDF = () => {
    const doc = new jsPDF();
  
    if (base64Image) {
      const img = new Image();
      img.src = base64Image;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngDataUrl = canvas.toDataURL("image/png");
        doc.addImage(pngDataUrl, "PNG", 15, 15, 180, 100);
  
        // Add text after the image has been added
        doc.setFontSize(22);
        doc.text(`${productD.model} Specifications`, 20, 130);
  
        let yPosition = 130 + 20;
        doc.setFontSize(16);
        doc.text(`Engine: ${productD.engine.type}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Horsepower: ${productD.engine.horsepower}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Infotainment: ${productD.features.infotainment}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Safety: ${productD.features.safety}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Interior: ${productD.features.interior}`, 20, yPosition);
        yPosition += 10;
        doc.text(`Price: ${productD.price_usd}`, 20, yPosition);
  
        // Save PDF after everything is added
        doc.save(`${productD.model}-specifications.pdf`);
      };
    }
  };
  
  
  return (
    <div
      key={productD.id}
      className="w-[90vw] mt-[40px] max-h-[500vh] sm:max-md:min-h-[200vh] mx-auto sm:max-md:w-widthMobile border-t-[1px] border-solid flex flex-col items-start border-secondTextColor "
    >
      <div className="flex flex-row sm:max-md:flex-wrap sm:max-md:w-[100vw] items-center w-[1200px] ">
        <div className="w-[49%] text-left flex flex-col items-start">
          <h2 className="text-2xl font-bold text-firstTextColor">
            Collections
          </h2>
          <div className="mt-6 w-[650px] sm:max-md:w-[100vw] flex gap-[10px] flex-row sm:max-md:flex-col items-center">
            <div className="flex flex-col sm:max-md:flex sm:max-md:flex-row sm:max-md:h-[300px]  h-[530px] gap-[20px] items-center w-[152px] sm:max-md:w-[90vw]  ">
              <div className="relative h-[167px] rounded-[20px] flex flex-row items-center w-[152px] sm:max-md:w-[30%] sm:max-md:h-[100%]  overflow-hidden">
                <img
                  src={productD.images[0]}
                  onClick={() => {
                    setImage(productD.images[0]);
                  }}
                  className="h-[167px] w-[152px] sm:max-md:w-[100%] sm:max-md:h-[100%] "
                />
              </div>
              <div className="relative h-[167px] rounded-[20px] flex flex-row items-center w-[152px] sm:max-md:w-[30%] sm:max-md:h-[100%]   overflow-hidden">
                <img
                  src={productD.images[1]}
                  onClick={() => {
                    setImage(productD.images[1]);
                  }}
                  className="h-[167px] w-[152px] sm:max-md:w-[100%] sm:max-md:h-[100%]"
                />
              </div>
              <div className="relative h-[167px] rounded-[20px] flex flex-row items-center w-[152px] sm:max-md:w-[30%] sm:max-md:h-[100%]  overflow-hidden">
                <img
                  src={productD.images[2]}
                  onClick={() => {
                    setImage(productD.images[2]);
                  }}
                  className="h-[167px] w-[152px] sm:max-md:w-[100%] sm:max-md:h-[100%]"
                />
              </div>
            </div>
            <div className="relative h-[530px] flex rounded-[20px] flex-row items-center sm:max-md:w-[90vw] sm:max-md:h-[100%] w-[444px] overflow-hidden">
              <img
                src={image === "" ? productD.images[0] : image}
                className="h-[530px] w-[444px] sm:max-md:w-[90vw] sm:max-md:h-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="w-[49%] pl-[30px] gap-[50px] sm:max-md:pl-[20px] sm:max-md:w-[100vw] flex flex-col items-center">
          <div className="flex flex-col gap-[20px] items-start w-[100%] ">
            <div className="w-[100%] text-left mt-[45px] ">
              <h1
                className={
                  "h-[48px] sm:max-md:text-[30px] text-left m-0 text-firstTextColor text-[40px] font-bold "
                }
              >
                {productD.model}
              </h1>
            </div>
            <h5 className="text-[16px] text-secondTextColor">
              {productD.type}
            </h5>
            <h4 className="w-[81px] text-textButton h-[43px] text-[32px] font-extrabold ">
              ${productD.price_usd}
            </h4>
          </div>
          <p className="w-[590px] sm:max-md:w-[92vw] text-[16px] text-secondTextColor opacity-40 ">
            {productD.features.infotainment}
          </p>
          <span className="w-[90%] bg-bgMainSection h-[2px] " />

          <div className="flex sm:max-md:w-[90vw] space-x-4">
            <button
              className="bg-bgNav hover:bg-blue-700 text-secondTextColor font-bold py-2 px-4 rounded-[22px] "
              onClick={() => alert("Test drive scheduled!")}
            >
              Schedule Test Drive
            </button>
            <button
              className="bg-bgNav hover:bg-green-700 text-secondTextColor font-bold py-2 px-4 rounded-[22px] "
              onClick={() => alert("Dealer contacted!")}
            >
              Contact Dealer
            </button>
            <button
              className="bg-bgNav hover:bg-yellow-700 text-secondTextColor font-bold py-2 px-4 rounded-[22px]  "
              onClick={() => alert("Viewing financing options!")}
            >
              View Financing options
            </button>
          </div>
      <button className="w-[200px] px-[20px] h-[50px] hover:shadow-shadowButton hover:shadow-textButton rounded-[20px] hover:text-secondTextColor transition-all duration-700 ease-in-out border-b-[2px] border-borderButton border-solid text-textFocus text-[15px] font-semibold " onClick={downloadPDF}>تحميل مواصفات السيارة</button>

        </div>
      </div>
      <div className="flex flex-col items-start w-[90vw] sm:max-md:w-[100vw] mt-[50px] ">
        <div className="flex flex-row items-center mr-[30px] border-b-[0.5px] sm:max-md:w-[100vw] sm:max-md:mx-0 sm:max-md:pr-[10px] sm:max-md:pl-[10px] border-solid border-b-secondTextColor mx-auto justify-between w-[100%] ">
          <p
            onClick={(e) => {
              handleClick(e.target);
              setProductDetails("flex");
              setReviews("none");
            }}
            className="toggle-btn text-[20px] pb-[20px] font-normal text-secondTextColor transition-all ease-in-out duration-500 cursor-pointer "
          >
            Product Details
          </p>
          <p
            onClick={(e) => {
              handleClick(e.target);
              setProductDetails("none");
              setReviews("flex");
            }}
            className="toggle-btn text-[20px] font-bold text-textFocus border-b-[2px] border-b-textFocus pb-[20px] font-normal text-secondTextColor transition-all ease-in-out duration-500 cursor-pointer "
          >
            Rating & Reviews
          </p>
        </div>
        <div
          style={{ display: reviews }}
          className="flex-col gap-[20px] overflow-y-scroll no-scrollbar sticky sm:max-md:w-[100vw]  items-start h-[350vh] sm:max-md:h-[246vh] w-[90vw] mt-[30px] "
        >
          <div>
            <p className="text-[24px] font-extrabold text-firstTextColor ">
              All Reviews
            </p>
          </div>
          <div className="flex flex-row  gap-[40px] flex-wrap items-center sm:max-md:w-[100vw] sm:max-md:flex-col mx-auto sm:max-md:items-center w-[100%]  ">
            {product.slice(0, 12).map((pr) => (
              <BigCustomerComment
                text={pr.body}
                name={pr.name.slice(0, 10)}
                email={pr.email}
              />
            ))}
          </div>
        </div>
        <div style={{ display: productDetails }} className="w-[1200px] sm:max-md:w-[90vw] h-[180vh] ">
          <div className="flex flex-row sm:max-md:flex-col sm:max-md:items-center items-start justify-start w-[100%]  ">
            <div className="w-[65%] sm:max-md:w-[99vw] sm:max-md:pl-[20px] flex pt-[20px] hover:gap-[30px] transition-all ease-in-out duration-1000 flex-col items-start gap-[20px] ">
              <h4 className="text-[15px] flex flex-row items-center relative sm:max-md:min-h-[50px] after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor ">
                <h1 className="text-[20px] text-textFocus font-bold">MODEL:</h1>
                {productD.model}
              </h4>
              <h4 className="text-[15px] flex flex-row items-center relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor ">
                <h1 className="text-[20px] text-textFocus font-bold">TYPE:</h1>{" "}
                {productD.type}
              </h4>
              <h4 className="text-[15px] flex flex-row items-center relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor ">
                <h1 className="text-[20px] text-textFocus font-bold">PRICE:</h1>
                ${productD.price_usd}
              </h4>
              <h4 className="text-[15px] flex flex-row items-center relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor ">
                <h1 className="text-[20px] text-textFocus font-bold">
                  ENGINE_horsepower:
                </h1>{" "}
                {productD.engine.horsepower}
              </h4>
              <h4 className="text-[15px] flex flex-row items-center relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor ">
                <h1 className="text-[20px] text-textFocus font-bold">
                  ENGINE_type:
                </h1>{" "}
                {productD.engine.type}
              </h4>
              <h4
                style={{
                  display:
                    productD.features.comfort === undefined ? "none" : "flex",
                }}
                className="flex flex-row items-center text-[15px] relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor "
              >
                <h1 className="text-[20px] text-textFocus font-bold">
                  FEATURES_comfort:
                </h1>{" "}
                {productD.features.comfort}
              </h4>
              <h4
                style={{
                  display:
                    productD.features.design === undefined ? "none" : "flex",
                }}
                className="flex flex-row items-center text-[15px] relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor "
              >
                <h1 className="text-[20px] text-textFocus font-bold">
                  FEATURES_design:
                </h1>{" "}
                {productD.features.design}
              </h4>
              <h4
                style={{
                  display:
                    productD.features.infotainment === undefined
                      ? "none"
                      : "flex",
                }}
                className="flex flex-row items-center sm:max-md:min-h-[50px] text-[15px] relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor "
              >
                <h1 className="text-[20px] text-textFocus font-bold">
                  FEATURES_infotainment:
                </h1>{" "}
                {productD.features.infotainment}
              </h4>
              <h4
                style={{
                  display:
                    productD.features.interior === undefined ? "none" : "flex",
                }}
                className=" text-[15px] sm:max-md:min-h-[50px] flex flex-row items-center relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor "
              >
                <h1 className="text-[20px] text-textFocus font-bold">
                  FEATURES_interior:
                </h1>{" "}
                {productD.features.interior}
              </h4>
              <h4
                style={{
                  display:
                    productD.features.offroad === undefined ? "none" : "flex",
                }}
                className="flex flex-row sm:max-md:min-h-[50px] items-center text-[15px] relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor "
              >
                <h1 className="text-[20px] text-textFocus font-bold">
                  FEATURES_offroad:
                </h1>{" "}
                {productD.features.offroad}
              </h4>
              <h4
                style={{
                  display:
                    productD.features.performance === undefined
                      ? "none"
                      : "flex",
                }}
                className="text-15px] sm:max-md:min-h-[50px] flex flex-row items-center relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor "
              >
                <h1 className="text-[20px] text-textFocus font-bold">
                  FEATURES_performance:
                </h1>{" "}
                {productD.features.performance}
              </h4>
              <h4
                style={{
                  display:
                    productD.features.range === undefined ? "none" : "flex",
                }}
                className="text-[15px] flex flex-row items-center relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor "
              >
                <h1 className="text-[20px] text-textFocus font-bold">
                  FEATURES_range:
                </h1>{" "}
                {productD.features.range}
              </h4>
              <h4
                style={{
                  display:
                    productD.features.safety === undefined ? "none" : "flex",
                }}
                className="text-[15px] sm:max-md:min-h-[50px] flex flex-row sm:max-md:min-h-[50px] items-center relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-hoverButton after:rounded-[5px] rounded-[5px] after:mix-blend-screen text-secondTextColor "
              >
                <h1 className="text-[20px] text-textFocus font-bold">
                  FEATURES_safety:
                </h1>{" "}
                {productD.features.safety}
              </h4>
            </div>
            <div className="w-[50%] sm:max-md:m-auto sm:max-md:w-[99vw] ">
              <ImageListDetails />
            </div>

          </div>

        </div> 
      </div>
    </div>
  );
}
