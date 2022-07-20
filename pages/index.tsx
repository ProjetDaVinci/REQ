import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Cards, Layout } from "../src/components";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import AuthComponent from "../src/components/Auth";
import { useSelector } from "react-redux";
import { selectors } from "../src/redux/ducks";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  const token = useSelector(selectors.auth.SelectToken);
  console.log("====================================");
  console.log(token);
  console.log("====================================");

  return token ? (
    <Layout>
      <Cards />
    </Layout>
  ) : (
    <AuthComponent />
  );
};

export default Home;
