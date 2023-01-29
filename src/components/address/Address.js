//styles
import styles from "./Address.module.css";

export default function Address({ infoData = {}, companyName = "" }) {
  return (
    <div className={styles["address-main"]}>
      <h3 className={styles["address-main__company-name"]}>{companyName}</h3>

      <address className={styles["address-main__address"]}>
        <div className={styles["address-main__address__location-details"]}>
          {infoData.addressDetails.map((single, i) => {
            return (
              <p
                className={styles["address-main__address__single-line"]}
                key={i}
              >
                {single}
              </p>
            );
          })}
        </div>

        <div className={styles["address-main__address__contact-details"]}>
          <h4
            className={
              styles["address-main__address__contact-details__heading"]
            }
          >
            Contact us
          </h4>

          <div
            className={
              styles["address-main__address__contact-details__phone-email"]
            }
          >
            <a href={`tel:${infoData.phone}`}>{infoData.phone}</a>
            <a href={`mailto:${infoData.email}`}>{infoData.email}</a>
          </div>
        </div>
      </address>
    </div>
  );
}
