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
      <Link href="/inhabitants">
        <a className={styles.back}>
          <h2>&larr; Back to main list</h2>
        </a>
      </Link>
      {loading && <Loading />}
      {!loading && inhabitant && (
        <div className={styles.container}>
          <div className={styles.panel}>
            <h1>{inhabitant.name}</h1>
            <div className={styles["features-container"]}>
              <div className={styles.features}>
                <p>
                  <strong>Age: </strong> {inhabitant.age}
                </p>
                <p>
                  <strong>Height: </strong> {inhabitant.height}
                </p>
                <p>
                  <strong>Weight: </strong>
                  {inhabitant.weight}
                </p>
                <p>
                  <strong>Hair color: </strong>
                  {inhabitant.hair_color}
                </p>
                <p>
                  <strong>Professions: </strong>
                  {inhabitant.professions.join(", ")}
                </p>
                <p>
                  <strong>Friends: </strong>
                  {inhabitant.friends.join(", ")}
                </p>
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
        </div>
      )}
    </Layout>
  );
};

export default InhabitantDetailPage;
