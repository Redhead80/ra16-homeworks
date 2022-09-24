// Категории поиска

import SearchCategoryItem from "./SearchCategoryItem";

function SearchCategoriesBlock(props) {
  const {searchCategoryItems} = props;

  return (
    <div>
      <ul className="search-categories">
        {
          searchCategoryItems.map((searchCategoryItem, index) => {
            return (<li key={index}>
              <SearchCategoryItem searchCategoryItem={searchCategoryItem}/>
            </li>);
          })
        }
      </ul>
    </div>
  );
}

export default SearchCategoriesBlock;