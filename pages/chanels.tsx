import { NextPage } from "next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Cards, Layout } from "../src/components";
import AuthComponent from "../src/components/Auth";
import CardsChanel from "../src/components/CardsChanel";
import { selectors } from "../src/redux/ducks";

const ChanelsPage: NextPage = () => {
  const token = useSelector(selectors.auth.SelectToken);

  return token ? (
    <Layout>
      <CardsChanel />
    </Layout>
  ) : (
    <AuthComponent />
  );
};

export default ChanelsPage;
