import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();

  if (!session) {
    return <Login providers={providers} />;
  }
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
        {session.user.name}
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://www.jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );

  const followResults = await fetch("https://www.jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );

  const providers = await getProviders();

  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
