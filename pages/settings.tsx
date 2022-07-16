import { NextPage } from "next";
import React, { useState } from "react";
import { Cards, Layout } from "../src/components";
import CardsChanel from "../src/components/CardsChanel";

const SettingsPage: NextPage = () => {
  return (
    <Layout>
      <CardsChanel />
    </Layout>
  );
};

export default SettingsPage;
