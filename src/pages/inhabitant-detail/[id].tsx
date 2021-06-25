import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Inhabitant } from "../../types/inhabitant";
import {
  selectInhabitants,
  selectSelectedInhabitant,
  setSelectedID,
} from "../../app/slices/inhabitants-slice";

import Layout from "../../components/layout";
import Loading from "../../components/loading";

import styles from "./inhabitant-detail.module.scss";

const InhabitantDetailPage = () => {
  const {
    query: { id },
  } = useRouter();

  const dispatch = useAppDispatch();
  const inhabitant = useAppSelector(selectSelectedInhabitant);
  const { loading } = useAppSelector(selectInhabitants);

  useEffect(() => {
    dispatch(setSelectedID(Number(id)));
  }, [id]);

  return (
    <Layout loadInhabitants={true}>
      <h2>
        <Link href="/inhabitants">
          <a>
            <h3>&larr; Back to main list</h3>
          </a>
        </Link>
      </h2>
      {loading && <Loading /> }
      {!loading && inhabitant && (
        <div className={styles.container}>
          <h1>{inhabitant.name}</h1>
          <div className={styles["features-container"]}>
            <div className={styles.features}>
              <span>Age: {inhabitant.age}</span>
              <span>Height: {inhabitant.height}</span>
              <span>Weight: {inhabitant.weight}</span>
              <span>Hair color: {inhabitant.hair_color}</span>
              <span>Professions: {inhabitant.professions.join(',')}</span>
              <span>Friends: {inhabitant.friends.join(',')}</span>
            </div>
            <div className={styles["image-container"]}>
              <Image
                src={inhabitant.thumbnail}
                alt={`Picture of ${name} inhabitant`}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default InhabitantDetailPage;
