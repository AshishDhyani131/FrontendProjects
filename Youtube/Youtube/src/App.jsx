import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/Main/SideBar";

function App() {
  return (
    <div className="container mx-auto mt-4">
      <Header></Header>
      <main className="flex mt-3">
        <SideBar></SideBar>
        <section>
          <SectionHeader></SectionHeader>
        </section>
      </main>
    </div>
  );
}

export default App;
