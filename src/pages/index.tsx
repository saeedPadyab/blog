import React, { useState } from "react";
import { NextPage } from "next";
// import { useRouter } from "next/router";
import { defaultMetaTags } from "@Core/constants";
import { ContentfulService } from "../core/contentful";

import { BlogPost } from "@Interfaces/post";

import Layout from "@Shared/components/Layout";
import Card from "@Shared/components/Card";
// import Paginator from "@Shared/components/Paginator";
import TagFilters from "@Shared/components/Tag-filters";

// const calculateRange = (length: any) => Array.from({ length }, (v, k) => k + 1);

const cards = (entries: any) => {
  return entries
    ? entries.map((entry: any, index: number) => (
        <Card info={entry} key={index} />
      ))
    : [];
};

type Props = {
  entries: BlogPost[];
  tags: { id: string; name: string }[];
  url: any;
};

const IndexPage: NextPage<Props, any> = (props: Props) => {
  // const router = useRouter();

  // const [_page, updatePage] = useState(1);
  const [tag, updateTag] = useState("");

  // useEffect(() => {
  //   void router.push({ pathname: "/", query: { page: _page tag: tag } });
  // }, [_page, tag]);

  const handleTagChosen = (tag: any) => {
    // updatePage(1);
    updateTag(tag);
  };

  return (
    <Layout metaTags={defaultMetaTags}>
      <div className="container">
        <div className="blogposts">
          <h1 className="blogposts__header">Latest posts</h1>
          <div className="cards-deck">{cards(props.entries)}</div>
        </div>
        <div className="sidenav">
          <TagFilters
            tags={props.tags}
            updatePage={handleTagChosen}
            selectedTagId={tag}
          />
        </div>
        <div className="pagination">
          {/* <Paginator
            handlePaginationChange={(event) => updatePage(event)}
            range={range}
            skip={page}
          /> */}
        </div>
      </div>
    </Layout>
  );
};

// export async function getStaticProps({ preview = false }) {
//   const allPosts = await getAllPostsForHome(preview)
//   return {
//     props: { preview, allPosts },
//   }
// }

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
