import { FC } from "react";
import { Wrapper, TagItem } from "./styles";

type Tag = { id: string; name: string };
interface IProps {
  data: Tag[];
}

const TagsFilter: FC<IProps> = ({ data = [] }) => {
  return (
    <Wrapper>
      <TagItem>All</TagItem>
      {data.map((item: Tag) => (
        <TagItem key={item.id}>{item.name}</TagItem>
      ))}
    </Wrapper>
  );
};

export default TagsFilter;
