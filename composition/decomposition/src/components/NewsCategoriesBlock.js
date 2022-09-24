// Категории новостей

import NewsCategory from "./NewsCategory";

function NewsCategoriesBlock(props) {
  const {categories} = props;

  return (
    <div>
      <ul className="news-categories">
        {
          categories.map((category, index) => {
            return (<li key={index}>
              <NewsCategory category={category}/>
            </li>);
          })
        }
      </ul>
    </div>
  );
}

export default NewsCategoriesBlock;