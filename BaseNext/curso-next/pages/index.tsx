import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <h1 > Home page </h1>
            <h1 className={styles.title}>
                {/*Ir a <a href="/about">About</a>*/}
                Ir a <Link href="/about" >About</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/about.tsx</code>
            </p>
        </MainLayout>
    )
}

export default Home
