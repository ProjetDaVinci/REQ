import { NextPage } from "next";
import React, { useState } from "react";
import { Cards, Layout, MyCardsChanel } from "../src/components";

const MyChanelsPage: NextPage = () => {
  return (
    <Layout>
      <MyCardsChanel />
    </Layout>
  );
};

export default MyChanelsPage;
