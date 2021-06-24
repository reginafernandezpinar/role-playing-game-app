import type { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/layout";

import styles from "./home.module.scss";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src="/logo.png" className={styles.logo} alt="logo" />
          <p>Welcome to Brastlewark</p>
          <p>Here you can browse the inhabitants details</p>
          <Link href={"/inhabitants"}>
            <a className={styles.browse}>
              <h3>Browse</h3>
            </a>
          </Link>
        </header>
      </div>
    </Layout>
  );
};

export default IndexPage;
