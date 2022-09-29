import {MainLayout} from "../../components/layouts/MainLayout";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

type Props = {};
const Pricing = (props: Props) => {
    return (
        <MainLayout>
            <h1 > Pricing page </h1>

            <h1 className={styles.title}>
                Ir a <Link href="/" >Home</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/pricing.tsx</code>
            </p>
        </MainLayout>
    )
};

export default Pricing