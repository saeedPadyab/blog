import { NextPage } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "@Shared/components/Layout";
import { ContentfulService } from "../../core/contentful";

import { BlogPost } from "@Interfaces/post";
import { MetaTags, PageType, RobotsContent } from "@Interfaces/meta-tags";
import Card from "@Shared/components/Card";

type Props = {
  article: BlogPost;
  suggestedArticles: BlogPost[];
};

const renderCards = (suggestions: any) =>
  suggestions.map((suggestion: any, index: any) => (
    <Card key={index} info={suggestion} />
  ));

const PostPage: NextPage<Props, any> = (props: Props) => {
  const postMetaTags: MetaTags = {
    canonical: `${process.env.DOMAIN_PUBLIC}`,
    description: `${props?.article?.description}`,
    // contentful does not set the http or https before an image link, so we need to add it ourselves
    image: `https:${props?.article?.heroImage?.url}`,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `${props?.article?.title}`,
    type: PageType.article,
  };

  return (
    <Layout metaTags={postMetaTags}>
      <div className="post-container max-w-5xl m-auto" id="post-container">
        <div className="post-header">
          <h1 className="text-3xl font-semibold uppercase">{props?.article?.title}</h1>
          <div className="author text-gray-500 mb-5">
            <p>Written by {props?.article?.author?.name}</p>
          </div>
        </div>
        <ReactMarkdown className="markdown" source={props?.article?.body} />
      </div>
      <div className="suggestions max-w-5xl m-auto">
        {renderCards(props.suggestedArticles ? props.suggestedArticles : [])}
      </div>
    </Layout>
  );
};

// PostPage.getInitialProps = async ({ query }) => {
//   const contentfulService = new ContentfulService();

//   const { post } = query;
//   const article = await contentfulService.getPostBySlug(post);

//   const tags =
//     article && article.tags ? article.tags.map((tag: any) => tag.sys.id) : [];

//   const suggestedArticles = await contentfulService.fetchSuggestions(
//     tags,
//     article?.slug
//   );

//   return { article, suggestedArticles };
// };
export async function getStaticProps({
  params,
  preview = false,
}: {
  params: any;
  preview: boolean;
}) {
  const contentfulService = new ContentfulService();
  const article = await contentfulService.getPostBySlug(params.slug);

  const tags =
    article && article.tags ? article.tags.map((tag: any) => tag.sys.id) : [];

  const suggestedArticles = await contentfulService.fetchSuggestions(
    tags,
    article?.slug
  );

  return {
    props: {
      preview,
      article,
      suggestedArticles,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const contentfulService = new ContentfulService();
  const data = await contentfulService.getBlogPostEntries();
  const allPost = data && data.entries ? data.entries : [];
  return {
    paths: allPost.map(({ slug }) => `/post/${slug}`),
    fallback: true,
  };
}

export default PostPage;
