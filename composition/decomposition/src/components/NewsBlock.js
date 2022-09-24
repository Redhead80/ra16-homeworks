// Новости с новостными категориями

import NewsCategoriesBlock from "./NewsCategoriesBlock";
import NewsItemsBlock from "./NewsItemsBlock";

function NewsBlock(props) {
  return (
    <div>
      <NewsCategoriesBlock
        categories={props.categories}/>
      <NewsItemsBlock
        newsItems={props.news}/>
    </div>
  );
}

export default NewsBlock;