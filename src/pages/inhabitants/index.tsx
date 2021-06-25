import { ChangeEvent } from "react";
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectFilteredInhabitants,
  setSearch,
} from "../../app/slices/inhabitants-slice";

import InhabitantList from "../../components/inhabitant-list";
import Layout from "../../components/layout";
import Loading from "../../components/loading";

import styles from "./inhabitants.module.scss";

const InhabitantsPage = () => {
  const dispatch = useAppDispatch();
  const {
    data: inhabitants,
    loading,
    search,
  } = useAppSelector(selectFilteredInhabitants);

  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearch(e.target.value)), 500);

  return (
    <Layout loadInhabitants={true}>
      <div className={styles['main-container']}>
        <h1 className={styles.title}>Brastlewark people</h1>
        <p className={styles.description}>Find inhabitants from Brastlewark</p>
        <input
          className={styles.search}
          placeholder={"search inhabitant"}
          onChange={handleOnChange}
        />
        {search && !inhabitants.length && (
          <p className={`${styles.description} ${styles['not-found']}`}>
            {`Sorry, we couldn't find any habitant with this name`}
          </p>
        )}
        <div className={styles['list-container']}>
          {loading ? <Loading /> : <InhabitantList inhabitants={inhabitants} />}
        </div>
      </div>
    </Layout>
  );
};

export default InhabitantsPage;
