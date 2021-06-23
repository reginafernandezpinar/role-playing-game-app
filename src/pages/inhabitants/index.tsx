import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectInhabitants,
  setInhabitants,
} from "../../app/slices/inhabitants-slice";

import { fetchInhabitantData } from "../../tools/api";
import InhabitantList from "../../components/inhabitant-list";

import styles from "./inhabitants.module.scss";

const InhabitantsPage = () => {
  const dispatch = useAppDispatch();
  const { data: inhabitants, loading } = useAppSelector(selectInhabitants);

  useEffect(() => {
    !inhabitants.length &&
      fetchInhabitantData()
        .then(({ data: { Brastlewark } }) =>
          dispatch(setInhabitants(Brastlewark))
        )
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
      {loading ? "loading" : <InhabitantList inhabitants={inhabitants} />}
    </main>
  );
};

export default InhabitantsPage;
