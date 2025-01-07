import React from "react";
import Card from "../Card/Card";
const products = [
  {
    _id: "1",
    name: "Wireless Headphones",
    description:
      "Experience high-quality sound with these comfortable wireless headphones.",
    price: 29.99,
    quantity: 15,
    photo: {
      data: "samplebase64image1",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "2",
    name: "Smart Watch",
    description:
      "Track your health and notifications with this stylish smart watch.",
    price: 79.99,
    quantity: 30,
    photo: {
      data: "samplebase64image2",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "3",
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 49.99,
    quantity: 25,
    photo: {
      data: "samplebase64image3",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "4",
    name: "Gaming Mouse",
    description:
      "Precision and speed with this ergonomically designed gaming mouse.",
    price: 39.99,
    quantity: 50,
    photo: {
      data: "samplebase64image4",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "5",
    name: "4K Ultra HD TV",
    description:
      "Enjoy vibrant colors and stunning clarity with this 4K Ultra HD TV.",
    price: 499.99,
    quantity: 5,
    photo: {
      data: "samplebase64image5",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "6",
    name: "Portable Power Bank",
    description:
      "Keep your devices charged on the go with this compact power bank.",
    price: 19.99,
    quantity: 100,
    photo: {
      data: "samplebase64image6",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "7",
    name: "Wireless Keyboard",
    description:
      "Type faster and more comfortably with this sleek wireless keyboard.",
    price: 59.99,
    quantity: 20,
    photo: {
      data: "samplebase64image7",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "8",
    name: "Smartphone Stand",
    description: "Adjustable smartphone stand for better viewing angles.",
    price: 15.99,
    quantity: 80,
    photo: {
      data: "samplebase64image8",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "9",
    name: "Laptop Backpack",
    description:
      "Spacious backpack with dedicated compartments for laptops and accessories.",
    price: 39.99,
    quantity: 40,
    photo: {
      data: "samplebase64image9",
      contentType: "image/jpeg",
    },
  },
  {
    _id: "10",
    name: "LED Desk Lamp",
    description: "Energy-efficient LED desk lamp with adjustable brightness.",
    price: 24.99,
    quantity: 60,
    photo: {
      data: "samplebase64image10",
      contentType: "image/jpeg",
    },
  },
];

const Featured = () => {
  // console.log(products);
  return (
    <div className="container">
      <h4>Featured Products</h4>
      <div className="featured-container row d-flex justify-content-center">
        {products?.map((cur) => {
          return <Card product={cur} key={cur._id} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
