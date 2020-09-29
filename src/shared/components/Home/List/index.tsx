import { FC } from "react";
import Card from "@Shared/components/Card";
import { BlogPost } from "@Interfaces/post";
// import Paginator from "@Shared/components/Paginator";
import { Wrapper } from "./styles";

const cards = (entries: BlogPost[]) => {
  return entries
    ? entries.map((entry: any, index: number) => (
        <Card info={entry} key={index} />
      ))
    : [];
};

interface IProps {
  data: BlogPost[];
}

const List: FC<IProps> = ({ data = [] }) => {
  return <Wrapper>{cards(data)}</Wrapper>;
};

export default List;
