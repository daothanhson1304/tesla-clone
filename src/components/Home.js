import React from "react";
import "../styles/Home.scss";
import { Section } from "./Section";
import model3 from "../Images/model-3.jpg";
import modelS from "../Images/model-s.jpg";
import modelX from "../Images/model-x.jpg";
import modelY from "../Images/model-y.jpg";
import accessories from "../Images/accessories.jpg";
import solarpanel from "../Images/solar-panel.jpg";
import solarroof from "../Images/solar-roof.jpg";

export default function Home() {
  return (
    <div className="container_home">
      <span id="modelS">
        <Section
          bgr={modelS}
          title="Model S"
          leftBtn="Custom Order"
          rightBtn="existing inventory"
          des="Order Online for Touchless Delivery"
        />
      </span>
      <span id="modelY">
        <Section
          bgr={modelY}
          title="Model Y"
          leftBtn="Custom Order"
          rightBtn="existing inventory"
          des="Order Online for Touchless Delivery"
        />
      </span>
      <span id="model3">
        <Section
          bgr={model3}
          title="Model 3"
          leftBtn="Custom Order"
          rightBtn="existing inventory"
          des="Order Online for Touchless Delivery"
        />
      </span>
      <span id="modelX">
        {" "}
        <Section
          bgr={modelX}
          title="Model X"
          leftBtn="Custom Order"
          rightBtn="existing inventory"
          des="Order Online for Touchless Delivery"
        />
      </span>
      <span id="solar-pannel">
        <Section
          bgr={solarpanel}
          title="Lowest Cost Solar Panels in America"
          leftBtn="Order Now"
          rightBtn="learn more"
          des="Money-back guarantee"
        />
      </span>
      <span id="solar-roof">
        <Section
          bgr={solarroof}
          title="Solar for New Roofs"
          leftBtn="Order Now"
          rightBtn="learn more"
          des="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        />
      </span>
      <span id="accessories">
        <Section bgr={accessories} title="Accessories" leftBtn="Shop Now" />
      </span>
    </div>
  );
}
