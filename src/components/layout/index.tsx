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
    loadInhabitants &&
      !inhabitants.length &&
      fetchInhabitantData()
        .then(({ data: { Brastlewark } }) =>
          dispatch(setInhabitants(Brastlewark))
        )
        .catch((error) => {
          console.log("error", error);
        });
  }, []);

  return (
    <div className={styles.layout}>
      <Head>
        <title>Brastlewark</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <nav>
        <Link href="/">
          <a>
            <h3>Home</h3>
          </a>
        </Link>
      </nav>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a
          className={styles["footer-logo"]}
          href="./"
          target="_blank"
          rel="noopener noreferrer"
        >
          FOOTER
        </a>
      </footer>
    </div>
  );
};

export default Layout;
