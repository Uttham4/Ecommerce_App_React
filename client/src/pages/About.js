import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our ecommerce web app offers a seamless shopping experience. Explore a vast selection of products with detailed descriptions and high-quality images. Easily browse, add to your cart, and securely checkout with various payment options. Personalized recommendations and a powerful search feature help you discover what you love. Quick and reliable delivery ensures your satisfaction. Stay informed with order tracking and responsive customer support. Shop on the go with our mobile-friendly design. Enjoy exclusive deals and promotions. Your one-stop destination for all your shopping needs. Shop smarter with our ecommerce web app today!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;