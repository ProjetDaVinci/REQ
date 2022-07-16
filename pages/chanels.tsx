import { NextPage } from "next";
import React, { useState } from "react";
import { Cards, Layout } from "../src/components";
import CardsChanel from "../src/components/CardsChanel";

const ChanelsPage: NextPage = () => {
  return (
    <Layout>
      <CardsChanel />
    </Layout>
  );
};

export default ChanelsPage;
