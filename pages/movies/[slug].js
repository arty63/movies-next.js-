import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { PrismaClient } from "@prisma/client";
import movies from "../api/movies";

const prisma = new PrismaClient();

export default function Movie() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Movie title goes here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Movie title will go here</h2>
      </main>
    </div>
  )
}

export default function getServerSideProps(context) {
  const {slug} = context.query
}