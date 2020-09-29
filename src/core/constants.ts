import { PageType, RobotsContent, MetaTags } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";

export const defaultMetaTags: MetaTags = {
  canonical: `${process.env.DOMAIN_PUBLIC}`,
  description: "I am a front-end developer expertise in react",
  image: "https://www.techhive.io/image.png",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "Saeed Padyab",
  type: PageType.website,
};
