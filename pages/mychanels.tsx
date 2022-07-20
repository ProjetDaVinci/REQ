import { NextPage } from "next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Cards, Layout, MyCardsChanel } from "../src/components";
import AuthComponent from "../src/components/Auth";
import { selectors } from "../src/redux/ducks";

const MyChanelsPage: NextPage = () => {
  const token = useSelector(selectors.auth.SelectToken);

  return token ? (
    <Layout>
      <MyCardsChanel />
    </Layout>
  ) : (
    <AuthComponent />
  );
};

export default MyChanelsPage;
