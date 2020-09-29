import React from "react";
import Meta from "../Meta";
import Header from "./Header";
import Footer from "./Footer";
import { MetaTags } from "@Interfaces/meta-tags";

interface IProps {
  metaTags: MetaTags;
}
const MainLayout: React.FC<IProps> = ({ metaTags, children }) => {
  return (
    <>
      <Meta tags={metaTags} />
      <Header />
      <div className="min-h-screen w-full">{children}</div>
      <Footer />
    </>
  );
};
export default MainLayout;
