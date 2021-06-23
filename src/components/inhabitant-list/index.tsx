import Link from "next/link";
import Image from "next/image";

import { Inhabitant } from "../../types/inhabitant";

import styles from "./inhabitant-list.module.scss";

const InhabitantList = ({ inhabitants }: { inhabitants: Inhabitant[] }) => {
  return (
    <div className={styles.grid}>
      {inhabitants?.map((inhabitant, i) => (
        <Link key={inhabitant.name} href={`/inhabitant/${i + 1}`}>
          <a className={styles.card}>
            <h3>{inhabitant.name}</h3>
            <div className={styles["image-container"]}>
              <Image
                // loader={myLoader}
                src={inhabitant.thumbnail}
                alt={`Picture of ${inhabitant.name} inhabitant`}
                // width={50}
                // height={40}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center bottom"}
              />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default InhabitantList;