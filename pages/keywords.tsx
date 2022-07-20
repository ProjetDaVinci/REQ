import { NextPage } from "next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Cards, Layout } from "../src/components";
import AuthComponent from "../src/components/Auth";
import CardsKey from "../src/components/CardsKey";
import { selectors } from "../src/redux/ducks";

const ApplicationsPage: NextPage = () => {
  const token = useSelector(selectors.auth.SelectToken);

  return token ? (
    <Layout>
      <CardsKey />
    </Layout>
  ) : (
    <AuthComponent />
  );
};

export default ApplicationsPage;
