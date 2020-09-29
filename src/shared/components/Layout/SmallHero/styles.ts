import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 120px;
  margin-top:80px
`;
export const Content = styled.div`
  ${apply`max-w-5xl m-auto flex justify-between items-center h-full`};
`;
export const Title = styled.div`
  ${apply`font-semibold text-3xl`};
`;
export const RoadPath = styled.div`
  ${apply`text-sm`};
`;
