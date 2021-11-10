import React from "react";
import Loader from "react-loader-spinner";
import { MainLayout } from "../layout/styles/Layout.styled";

export default function Loading() {
  return (
    <MainLayout>
      <Loader type="Rings" color="#00BFFF" height={550} width={80} />
    </MainLayout>
  );
}
