import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/Main/SideBar";
import SectionHeader from "./components/Main/SectionHeader";
import SectionBody from "./components/Main/SectionBody";
import { sectionHeaderList } from "./data";
function App() {
  return (
    <div className="container mx-auto mt-4">
      <Header></Header>
      <main className="flex gap-x-16 mt-3">
        <SideBar></SideBar>
        <section className="w-full">
          <SectionHeader headerList={sectionHeaderList}></SectionHeader>
          <SectionBody></SectionBody>
        </section>
      </main>
    </div>
  );
}

export default App;
