import { NextPage } from "next";
import React, { useState } from "react";
import { Cards, Layout } from "../src/components";
import CardsChanel from "../src/components/CardsChanel";

const MyChanelsPage: NextPage = () => {
  return (
    <Layout>
      <CardsChanel />
    </Layout>
  );
};

export default MyChanelsPage;
