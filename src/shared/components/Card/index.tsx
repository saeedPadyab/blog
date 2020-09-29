import React, { FunctionComponent } from "react";
import Link from "next/link";
import { getHref, getNavigationLink } from "@Shared/helper";
import { Wrapper, Image, Body, Title, Description, Footer } from "./styles";

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    publishedAt: Date;
    slug: string;
  };
};

const Card: FunctionComponent<Props> = ({ info }) => {
  return (
    <Wrapper>
      <Image url={info.heroImage} />
      <Body>
        <Title>{info.title}</Title>
        <Description>{info.description}</Description>
      </Body>
      <Footer>
        <Link href={getHref(info.slug)} as={getNavigationLink(info.slug)}>
          <a>Read More &rarr;</a>
        </Link>
      </Footer>
    </Wrapper>
  );
};

export default Card;
