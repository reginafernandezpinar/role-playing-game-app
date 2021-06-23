import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useAppSelector } from "../../app/hooks";
import { Inhabitant } from "../../types/inhabitant";
import { selectInhabitants } from "../../app/slices/inhabitants-slice";

import styles from "./inhabitant-detail.module.scss";

const InhabitantDetail = () => {
  const { query: { id } } = useRouter();
  const { data: inhabitants, loading } = useAppSelector(selectInhabitants);
  const [inhabitant, setInhabitant] = useState<Inhabitant>(null);

  useEffect(() => {
    console.log('🚀 ~ file: [id].tsx ~ line 16 ~ useEffect ~ inhabitants', inhabitants);
    console.log('🚀 ~ file: [id].tsx ~ line 16 ~ useEffect ~ id', id);
  }, [id]);

  return (
    <>
      <h2>
        <Link href="/inhabitants">
          <a>
            <h3>&larr; Back to main list</h3>
          </a>
        </Link>
      </h2>
      <div className={styles.container}>
        <h1>{inhabitant?.name}</h1>
        <div>
          {/* <InhabitantCard inhabitantDetails={inhabitant} /> */}
        </div>
      </div>
    </>
  );
};

export default InhabitantDetail;
