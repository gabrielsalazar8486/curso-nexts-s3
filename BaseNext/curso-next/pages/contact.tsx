import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";

const Contact: NextPage = () => {
    return (
        <MainLayout>
            <h1 > Contact page </h1>

            <h1 className={styles.title}>
                Ir a <Link href="/" >Home</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/contact.tsx</code>
            </p>
        </MainLayout>
    )
}

export default Contact
