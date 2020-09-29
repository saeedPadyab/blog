import { PageType, RobotsContent, MetaTags } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";

export const defaultMetaTags: MetaTags = {
  canonical: `${process.env.DOMAIN_PUBLIC}`,
  description: "Whatever you need related to frontend specially react tutorial",
  image:
    "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "My Blogs",
  type: PageType.website,
};
