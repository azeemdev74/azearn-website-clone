import React, { useState } from "react";
import "./HomePage.css";
import { Card, Row, Col } from "react-bootstrap";
import Footer from "../Footer/Footer";

function HomePage() {
  const [selectedList, setselectedList] = useState("women");

  const womenList = [
    {
      productName: "Floral Maxi Dress",
      productImg: "https://example.com/images/floral-maxi-dress.jpg",
      productDesc: "Elegant floral maxi dress made from lightweight, breathable fabric, perfect for summer outings.",
      productPrice: "59.99 $",
    },
    {
      productName: "Leather Handbag",
      productImg: "https://example.com/images/leather-handbag.jpg",
      productDesc: "Premium leather handbag with a spacious interior and stylish design.",
      productPrice: "89.99 $",
    },
    {
      productName: "Makeup Brush Set",
      productImg: "https://example.com/images/makeup-brush-set.jpg",
      productDesc: "Professional 12-piece makeup brush set with soft synthetic bristles for flawless application.",
      productPrice: "25.99 $",
    },
    {
      productName: "Skincare Gift Box",
      productImg: "https://example.com/images/skincare-gift-box.jpg",
      productDesc: "A luxurious gift box containing moisturizer, serum, and face mask for radiant skin.",
      productPrice: "49.99 $",
    },
    {
      productName: "Fitness Yoga Leggings",
      productImg: "https://example.com/images/yoga-leggings.jpg",
      productDesc: "Comfortable and stretchy yoga leggings with a high waist for support during workouts.",
      productPrice: "29.99 $",
    },
  ];

  const mobileList = [
    {
      productName: "Apple iPhone 15 Pro",
      productImg: "https://example.com/images/iphone15pro.jpg",
      productDesc: "A premium smartphone with a 6.1-inch display, A17 Bionic chip, and an advanced camera system.",
      productPrice: "999 $",
    },
    {
      productName: "Samsung Galaxy S23 Ultra",
      productImg: "https://example.com/images/galaxys23ultra.jpg",
      productDesc: "A flagship phone featuring a 6.8-inch AMOLED display, 200MP camera, and top-tier performance.",
      productPrice: "1199 $",
    },
    {
      productName: "Google Pixel 8",
      productImg: "https://example.com/images/pixel8.jpg",
      productDesc: "An AI-powered device with a clean Android experience, 6.2-inch display, and Tensor G3 processor.",
      productPrice: "699 $",
    },
    {
      productName: "OnePlus 12 Pro",
      productImg: "https://example.com/images/oneplus12pro.jpg",
      productDesc: "A sleek phone with a 120Hz AMOLED display, Snapdragon 8 Gen 3, and ultra-fast charging support.",
      productPrice: "799 $",
    },
    {
      productName: "Xiaomi 13 Pro",
      productImg: "https://example.com/images/xiaomi13pro.jpg",
      productDesc: "A Leica-powered camera phone with a 6.73-inch AMOLED display and Snapdragon 8 Gen 2 chipset.",
      productPrice: "899 $",
    },
  ];

  const pakistanList = [
    {
      productName: "Wireless Headphones",
      productImg: "https://example.com/images/wireless-headphones.jpg",
      productDesc: "High-quality wireless headphones with noise cancellation and long battery life.",
      productPrice: "79.99 $",
    },
    {
      productName: "Smartphone Stand",
      productImg: "https://example.com/images/smartphone-stand.jpg",
      productDesc: "Durable and adjustable smartphone stand, perfect for video calls and streaming.",
      productPrice: "15.49 $",
    },
    {
      productName: "Gaming Keyboard",
      productImg: "https://example.com/images/gaming-keyboard.jpg",
      productDesc: "RGB backlit mechanical gaming keyboard with customizable keys and ergonomic design.",
      productPrice: "49.99 $",
    },
    {
      productName: "Fitness Tracker",
      productImg: "https://example.com/images/fitness-tracker.jpg",
      productDesc: "Track your daily activity, heart rate, and sleep patterns with this sleek fitness tracker.",
      productPrice: "29.99 $",
    },
    {
      productName: "Portable Blender",
      productImg: "https://example.com/images/portable-blender.jpg",
      productDesc: "Compact and rechargeable blender, ideal for making smoothies on the go.",
      productPrice: "39.99 $",
    },
  ];

  return (
    <div className="home-container container">
      <div className="text-center my-5 d-flex flex-column align-items-center">
        <h4 className="fw-bold">Best watches & mobiles in UK</h4>
        <p
          className="fs-5 w-75 text-center px-3"
          style={{ color: "#7F85A8", lineHeight: "1.6", fontWeight: "400" }}
        >
          Best women's gift shop in UK if you are searching. We have multiple
          collections for gifts like watches for women and men. We are providing
          the best quality watches and mobiles.
        </p>
      </div>
      <div>
        {/* Tabs */}
        <div
          className="listBtn d-flex flex-wrap justify-content-center"
          style={{ gap: "20px" }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setselectedList("women")}
            className={selectedList === "women" ? "active" : ""}
          >
            Women's Watches
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setselectedList("mobile")}
            className={selectedList === "mobile" ? "active" : ""}
          >
            Mobile
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setselectedList("pakistan")}
            className={selectedList === "pakistan" ? "active" : ""}
          >
            Pakistan
          </span>
        </div>
        <div>
          <hr />
        </div>
        {/* Render items */}
        <Row className="mx-3 gy-4">
          {(
            (selectedList === "women" && womenList) ||
            (selectedList === "mobile" && mobileList) ||
            (selectedList === "pakistan" && pakistanList)
          ).map((val, index) => {
            return (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={val.productImg}
                    alt={val.productName}
                    className="img-fluid"
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{val.productName}</Card.Title>
                    <Card.Text>{val.productDesc}</Card.Text>
                    <Card.Text
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "brown",
                      }}
                    >
                      {val.productPrice}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
