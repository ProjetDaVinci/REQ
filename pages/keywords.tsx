import { NextPage } from "next";
import React, { useState } from "react";
import { Cards, Layout } from "../src/components";
import CardsKey from "../src/components/CardsKey";

const ApplicationsPage: NextPage = () => {
  return (
    <Layout>
      <CardsKey />
    </Layout>
  );
};

export default ApplicationsPage;
