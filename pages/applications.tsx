import { NextPage } from "next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Cards, Layout } from "../src/components";
import AuthComponent from "../src/components/Auth";
import { selectors } from "../src/redux/ducks";

const ApplicationsPage: NextPage = () => {
  const token = useSelector(selectors.auth.SelectToken);

  return token ? (
    <Layout>
      <Cards />
    </Layout>
  ) : (
    <AuthComponent />
  );
};

export default ApplicationsPage;
