import { FC } from "react";
import { BlogPost } from "@Interfaces/post";
import Tags from "./Tags";
import List from "./List";
import { Wrapper, Content } from "./styles";

interface IProps {
  entries: BlogPost[];
  tags: { id: string; name: string }[];
}

const HomeContent: FC<IProps> = ({ entries = [], tags = [] }) => {
  return (
    <Wrapper>
      <Content>
        <Tags data={tags} />
        <List data={entries} />
      </Content>
    </Wrapper>
  );
};

export default HomeContent;

{
  /* <div className="sidenav">
<TagFilters
  tags={props.tags}
  updatePage={handleTagChosen}
  selectedTagId={tag}
/>
</div>
<div className="pagination">
{ <Paginator
handlePaginationChange={(event) => updatePage(event)}
range={range}
skip={page}
/> }
</div> */
}
