import React, { FunctionComponent } from "react";
import { Wrapper, Content, Title, RoadPath } from "./styles";

const SmallHero: FunctionComponent = () => {
  return (
    <Wrapper>
      <Content>
        <Title>BLog List</Title>
        <RoadPath>Home / Blog</RoadPath>
      </Content>
    </Wrapper>
  );
};

export default SmallHero;
