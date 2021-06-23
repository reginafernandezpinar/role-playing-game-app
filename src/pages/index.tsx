import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "./home.module.scss";

const IndexPage: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Brastlewark</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.png" className={styles.logo} alt="logo" />
        <p>Welcome to Brastlewark</p>
        <p>Here you can browse the inhabitants details</p>
        <Link href={'/inhabitants'}>
          <a className={styles.browse}>
            <h3>Browse</h3>
          </a>
        </Link>
      </header>
    </div>
  );
};

export default IndexPage;
