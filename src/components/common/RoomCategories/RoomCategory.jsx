import React from "react";
import styles from "./roomCategory.module.scss";
import img1 from "../../../Data/images/slider1.jpg";
import { Card } from "antd";
const RoomCategory = () => {
  return (
    <Card hoverable>
      <div className={styles.container}>
        <img src={img1} alt="" />
        <div className={styles.centered_text}>Centered</div>
      </div>
    </Card>
  );
};

export default RoomCategory;
