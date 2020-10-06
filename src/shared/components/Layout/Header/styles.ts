import styled from "styled-components";
export const HeaderWrapper = styled.div`
  ${apply`flex py-4 px-4 items-center shadow fixed top-0 left-0 right-0 w-full z-50 bg-white`};
`;
export const LogoBox = styled.div`
  width: 200px;
`;
export const Menu = styled.ul`
  ${apply`flex-1 flex justify-end`};
`;
export const MenuItem = styled.li`
  ${apply`mx-3 uppercase cursor-pointer text-sm`};
  color: ${({ selected }: { selected?: boolean }) =>
    selected ? theme`colors.orange.400` : theme`colors.black`};
  font-weight: ${({ selected }: { selected?: boolean }) =>
    selected ? "bold" : "normal"};
  &:hover {
    ${apply`text-orange-300`};
  }
`;
export const Actions = styled.ul`
  min-width: 150px;
  ${apply`border-l border-black flex`};
`;

export const ActionItem = styled.li`
  ${apply`mx-3 uppercase cursor-pointer text-sm`};
`;
