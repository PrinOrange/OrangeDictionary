import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import { HomePage } from "./pages/Home";

function Main(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomePage />
    </ApplicationProvider>
  );
}

export default Main;
