import styled from "styled-components";

export const Wrapper = styled.div`
  ${apply`flex flex-col`};
  margin-right: 35px;
  width: calc(33.33% - 35px);
  &:hover {
    ${apply`shadow`};
  }
`;
export const Image = styled.div`
  ${apply`bg-cover`};
  background-image: ${({ url }: { url: string }) => `url(${url})`};
  height: 220px;
`;
export const Body = styled.div`
  ${apply`py-4 flex-1 px-3`};
`;
export const Title = styled.h2`
  ${apply`font-semibold text-xl uppercase mb-3`};
`;
export const Description = styled.p`
  ${apply`text-gray-600 text-sm`};
`;
export const Footer = styled.div`
  ${apply`uppercase text-orange-400 px-3 pb-2`};
`;
