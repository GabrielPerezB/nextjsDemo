import Image from "next/image";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = ({ image, title, description, address }) => {
  return (
    <section className={classes.detail}>
      <Image src={image} alt={title} layout='fill' width={1280} height={640} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
