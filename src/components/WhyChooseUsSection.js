import React from "react";
import styles from "../style/WhyChooseUsSection.module.css";

export default function WhyChooseUsSection({ className = "" }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`why-bg-img ${styles.backgroundImage}`}  />
      <section className={styles.sectionTitle}>
        Why Choose Us?
      </section>
      <section className={styles.titleContainer}>
        <div className={styles.titleText}>
          <div className={styles.title}>
            <span>
              <p>We bring solutions to</p>
              <p>make life easier.</p>
            </span>
          </div>
        </div>
      </section>
      <section className={styles.iconContainer}>
        <div className={styles.iconTitleContainer}>
          <div className={styles.iconTitle}>Professional Design</div>
        </div>
      </section>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <span>
            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris</p>
            <p>condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Praesent</p>
            <p>commodo cursus magna, vel.</p>
          </span>
        </div>
      </div>
      <section className={styles.iconContainer}>
        <div className={styles.iconTitleContainer}>
          <div className={styles.iconTitle}>Top-Notch Support</div>
        </div>
      </section>
      <section className={styles.iconContainer}>
        <div className={styles.iconTitleContainer}>
          <div className={styles.iconTitle}>Header and Slider Options</div>
        </div>
      </section>
      <div className={styles.bottomSVGContainer}>
        <div className={styles.svgWrapper}>
        </div>
      </div>
    </div>
  );
}