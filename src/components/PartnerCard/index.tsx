import usePartnerContext from "../../hooks/usePartnerContext";
import { Partner } from "../../models/partner";
import styles from "./index.module.css";

export const PartnerCard = () => {
  const { partnerListState } = usePartnerContext();
  return (
    <>
      {partnerListState.map((partner: Partner) => (
        <div className={styles.card}>
          <img className={styles.img} src={partner.img} alt={partner.name} />
          <h6 className={styles.name}>{partner.name}</h6>
        </div>
      ))}
    </>
  );
};