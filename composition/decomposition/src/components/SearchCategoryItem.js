// Элемент в категории "Категории поиска"

function SearchCategoryItem(props) {
  return (
      <div className="space">{props.searchCategoryItem.text}</div>
  );
}

export default SearchCategoryItem;