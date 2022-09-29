import styles from "./MainLayout.module.css";
import Head from "next/head";
import {Navbar} from "../navbar/Navbar";
import {FC, ReactNode} from "react";

type Props = { children:ReactNode };
export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact -- Gabriel</title>
                <meta name="description" content="Contact pages" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>

            <main className={styles.main}>
                { children }
            </main>
        </div>
    )
};