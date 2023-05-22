import { useState, useEffect} from "react";
import styles from "./index.module.css";
import { PartnerCard } from "../PartnerCard";
import {api} from "../../api/index";
import usePartnerContext from "../../hooks/usePartnerContext";

export const OurPartners = () => {

  const { setPartnerListState } = usePartnerContext();

  useEffect(() => {
    api.get("partners").then((response) => {
        return response.data;
      }).then((data) => {
        setPartnerListState(data);
      });
  }, []);

  return (
    <section id="Parceiros" className={styles.section}>
        <div>
          <h2 className={styles.title}>
              <pre>Nossos</pre>
              <pre>Parceiros</pre>
          </h2>
        </div>
        <div className={styles.card}>
          <PartnerCard/>
        </div>
    </section>
  );
};