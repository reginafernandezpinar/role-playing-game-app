import Link from "next/link";
import Image from "next/image";

import { Inhabitant } from "../../types/inhabitant";

import styles from "./inhabitant-list.module.scss";

const InhabitantList = ({ inhabitants }: { inhabitants: Inhabitant[] }) => {
  return (
    <div className={styles.grid}>
      {inhabitants?.map((inhabitant) => (
        <Link key={inhabitant.name} href={`/inhabitant-detail/${inhabitant.id}`}>
          <a className={styles.card}>
            <h3>{inhabitant.name}</h3>
            <div className={styles["image-container"]}>
              <Image
                src={inhabitant.thumbnail}
                alt={`Picture of ${inhabitant.name} inhabitant`}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default InhabitantList;
