import { Button, Card } from "antd";
import React from "react";
import styles from "./room.module.scss";
import img1 from "../../../Data/images/slider3.jpg";
const Room = () => {
  const contStyle = { display: "flex", justifyContent: "space-evenly" };
  return (
    <Card
      bodyStyle={contStyle}
      hoverable="true"
      size="small"
      style={{ width: 800 }}
      className={styles.room_cont}
      cover={<img src={img1} alt="" />}
    >
      <div className={styles.room_text}>
        <h1>Courtyard Standard Rooms</h1>
        <p>
          Choose from 59 compact rooms located on three floors amongst our
          fern-shaded courtyard garden and water features.
        </p>
        <div className={styles.buttons}>
          <Button size="large">READ MORE</Button>
          <Button
            size="large"
            style={{
              backgroundColor: "gray",
              color: "#fff",
              marginLeft: "10px",
            }}
          >
            CHECK AVAILABILITY
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Room;
