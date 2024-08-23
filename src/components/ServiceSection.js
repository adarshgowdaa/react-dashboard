import ServiceBlock from "./ServiceBlock";
import styles from "../style/ServiceSection.module.css";

export default function ServiceSection({ className = "" }) {
  const serviceData = [
    {
      title: "Web Design",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
        "Cras justo odio, dapibus ac facilisis in,",
      ],
      imageClass: "web-service-img",
    },
    {
      title: "Graphic Design",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
        "Cras justo odio, dapibus ac facilisis in,",
      ],
      imageClass: "graphic-service-img",
    },
    {
      title: "3D Animation",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
        "Cras justo odio, dapibus ac facilisis in,",
      ],
      imageClass: "design-service-img",
    },
  ];

  return (
    <div className={`${styles.selfStretch} ${styles.text17px} ${styles.leading29px} `}>
      <div className={styles.fontMedium}>
        <div className={styles.container}>
          <section className={styles.sectionHeading}>What We Do?</section>
          <div className={styles.title}>
            <span className="text-center">
              <p>The service we offer is specifically</p>
              <p>designed to meet your needs.</p>
            </span>
          </div>
          <div className={styles.flexWrap}>
            {serviceData.map((service, index) => (
              <ServiceBlock
                key={index}
                title={service.title}
                description={service.description}
                imageClass={service.imageClass}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}