import React from "react";
import { NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import { ContentfulService } from "../core/contentful";
import Layout from "@Shared/components/Layout";
import Content from "@Shared/components/Home";
import { BlogPost } from "@Interfaces/post";

type Props = {
  entries: BlogPost[];
  tags: { id: string; name: string }[];
  url: any;
};

const IndexPage: NextPage<Props, any> = (props: Props) => {
  return (
    <Layout metaTags={defaultMetaTags}>
      <Content entries={props.entries} tags={props.tags} />
    </Layout>
  );
};

export async function getStaticProps() {
  const contentfulService = new ContentfulService();
  try {
    const data = await contentfulService.getBlogPostEntries();
    // TODO: need to move outside
    const { tags } = await contentfulService.getAllTags();
    return {
      props: {
        tags,
        entries: data && data.entries ? data.entries : [],
      },
      revalidate: 5,
    };
  } catch (error) {
    return {
      props: {
        isError: true,
      },
    };
  }
}

export default IndexPage;
