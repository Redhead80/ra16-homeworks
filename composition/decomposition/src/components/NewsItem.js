// Элемент в категории "Новости"

function NewsItem(props) {
  return (
    <div className="news-item">
      <img src={props.newsItem.icon} alt=""></img>
      <div>{props.newsItem.text}</div>
    </div>
  );
}

export default NewsItem;