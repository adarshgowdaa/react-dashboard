import React from "react";
import PropTypes from "prop-types";
import styles from "../style/ServiceBlock.module.css";

function ServiceBlock({ title, description, imageClass }) {
  return (
    <div className={styles.serviceBlock}>
      <div className={`${imageClass} ${styles.imageWrapper}`} />
      <div className="flex items-end justify-center pt-4">
        <div className={styles.serviceTitle}>{title}</div>
      </div>
      <div className="flex items-center justify-center self-stretch px-2.5 [max-width:337px]">
        <div className={styles.description}>
          {description.map((desc, index) => (
            <p key={index} className="text-center">{desc}</p>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-[0.66px] pl-[5px] pt-[2.7px]">
        <div className={styles.learnMore}>Learn More</div>
      </div>
    </div>
  );
}

ServiceBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageClass: PropTypes.string.isRequired,
};

export default ServiceBlock;