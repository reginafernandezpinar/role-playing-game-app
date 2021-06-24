import Image from "next/image";
import Link from "next/link";

import { InhabitantCardProps } from "./inhabitant-card.types";

import styles from "./inhabitant-card.module.scss";

const InhabitanCard = ({ inhabitant }: InhabitantCardProps) => {
  const { name, thumbnail, id } = inhabitant;

  return (
    <Link href={`/inhabitant-detail/${id}`}>
      <a className={styles.card}>
        <div className={styles["card-title"]}>
          <h3>{name}</h3>
        </div>
        <div className={styles["image-container"]}>
          <Image
            src={thumbnail}
            alt={`Picture of ${name} inhabitant`}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
          />
        </div>
      </a>
    </Link>
  );
};

export default InhabitanCard;
