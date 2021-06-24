import { Inhabitant } from "../../types/inhabitant";
import InhabitantCard from "../inhabitant-card";

import styles from "./inhabitant-list.module.scss";

const InhabitantList = ({ inhabitants }: { inhabitants: Inhabitant[] }) => {
  return (
    <div className={styles.grid}>
      {inhabitants?.map((inhabitant) => (
        <InhabitantCard
          key={`inhabitant-${inhabitant.id}`}
          inhabitant={inhabitant}
        />
      ))}
    </div>
  );
};

export default InhabitantList;
