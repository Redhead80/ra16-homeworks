// Элемент в категории "Категории новостей"

function NewsCategory(props) {
  return (
    <h3 className="space">{props.category.title}</h3>
  );
}

export default NewsCategory;