import React from "react";
import { Card, Button } from "antd";
import ImageSlider from "../components/home/imageSlider/ImageSlider";
import image1 from "../Data/images/slider3.jpg";
import styles from "./home.module.scss";

const { Meta } = Card;
const Home = () => {
  console.log(ImageSlider);
  return (
    <div className={styles.home}>
      <section className={styles.imageSlider_sec}>
        <ImageSlider />
      </section>
      <section className={styles.intro_sec}>
        <Card
          style={{
            width: "100%",
          }}
        >
          <div className={styles.intro_cont}>
            <div className={styles.intro_text}>
              <h3>Hello Cape town</h3>
              <p>
                We are one of South Africa’s best-loved hotels, maybe because we
                exist to please those guests who stay with us. Excellent service
                is our top priority, followed closely by great food, beautiful
                gardens with views of the eastern slopes of Table Mountain, and
                merging contemporary interior styling with luxury features in
                our rooms
              </p>
            </div>
            <div className={styles.intro_img}>
              <img src={image1} alt="" />
            </div>
          </div>
        </Card>
      </section>
      <section className={styles.tasks_sec}>
        <Card>
          <h1>Flavours at The Vineyard</h1>
          <p>Casually nibble, snack, drink and eat.</p>
          <span>The perfect location for</span>
          <ul style={{ display: "flex", justifyContent: "space-between" }}>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Afternoon Tea</li>
          </ul>
          <Button type="default">DINE WITH US</Button>
        </Card>

        <Card style={{ textAlign: "center" }}>
          <h1>Book a Table for Breakfast, Lunch or Dinner </h1>

          <Button type="default"> Book Now</Button>
        </Card>
      </section>
      <section className={styles.location_for}>
        <div className={styles.location_cards}>
          <Card
            hoverable
            title="Conference Meetings"
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <p>
              Our facilities can be configured for a variety of custom or
              standard requirements. Ideal for • Conferences • Meetings •
              Presentations
            </p>
            <Button type="default">Details</Button>
          </Card>
          <Card
            hoverable
            title="Conference Meetings"
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <p>
              Our facilities can be configured for a variety of custom or
              standard requirements. Ideal for • Conferences • Meetings •
              Presentations
            </p>
            <Button type="default">Details</Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
