import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/layout";

import styles from "./home.module.scss";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.banner}>
          <img src="/logo.png" alt="logo" className={styles.logo} />
          <p>Welcome to Brastlewark</p>
          <p>{`Here you can browse the inhabitants' details`}</p>
          <Link href={"/inhabitants"}>
            <a className={styles.browse}>
              <h3>Explore</h3>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
