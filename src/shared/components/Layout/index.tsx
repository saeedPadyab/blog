import React from "react";
import Meta from "../Meta";
import Header from "./Header";
import SmallHero from "./SmallHero";
import { MetaTags } from "@Interfaces/meta-tags";

interface IProps {
  metaTags: MetaTags;
}
const MainLayout: React.FC<IProps> = ({ metaTags, children }) => {
  return (
    <>
      <Meta tags={metaTags} />
      <Header />
      <SmallHero />
      <div className="min-h-screen w-full">{children}</div>
    </>
  );
};
export default MainLayout;
