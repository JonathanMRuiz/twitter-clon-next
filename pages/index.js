import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Twitter Clon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-[#000] min-h-screen max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  );
}
