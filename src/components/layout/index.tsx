import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectInhabitants,
  setInhabitants,
} from "../../app/slices/inhabitants-slice";
import { fetchInhabitantData } from "../../tools/api";

import styles from "./layout.module.scss";
import { LayoutProps } from "./layout.types";

const Layout = ({ children, loadInhabitants }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const { data: inhabitants } = useAppSelector(selectInhabitants);

  useEffect(() => {
    if (loadInhabitants && !inhabitants.length) {
      fetchInhabitantData()
        .then(({ data: { Brastlewark } }) =>
          dispatch(setInhabitants(Brastlewark))
        )
        .catch(error => {
          console.log("error", error);
        });
    }
  }, []);

  return (
    <div className={styles.layout}>
      <Head>
        <title>Brastlewark</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <nav>
        <Link href="/">
          <a className={styles.logo}>
            <img src="/logo.png" alt="logo" />
            <span className={styles.text}>Brastlewark</span>
          </a>
        </Link>
      </nav>
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default Layout;
