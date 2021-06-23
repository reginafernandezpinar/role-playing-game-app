import { useState, useEffect } from "react";

import { fetchInhabitantList } from "../../tools/api";
import { Inhabitant } from "../../types/inhabitant";
import InhabitantList from "../../components/inhabitant-list";

import styles from "./inhabitants.module.scss";

const InhabitantsPage = () => {
  const [inhabitants, setInhabitants] = useState<Array<Inhabitant>>([]);

  useEffect(() => {
    fetchInhabitantList()
      .then(({ data: { Brastlewark } }) => setInhabitants(Brastlewark))
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Brastlewark people</h1>
      <p className={styles.description}>
        Retrieve info from this habitants....
      </p>
      <InhabitantList inhabitants={inhabitants} />
    </main>
  );
};

export default InhabitantsPage;
