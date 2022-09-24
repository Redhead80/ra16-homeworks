// Поиск

import SearchCategoriesBlock from "./SearchCategoriesBlock";

function SearchBlock(props) {
  return (
    <div>
      <SearchCategoriesBlock searchCategoryItems={props.searchCategoryItems}/>
      <div className="search">
        <h2 className="search-name">Это точно не Яндекс</h2>
        <input className="search-line"></input>
      </div>
    </div>
  );
}

export default SearchBlock;