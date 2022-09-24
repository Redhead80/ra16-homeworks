// Новости

import NewsItem from "./NewsItem";

function NewsItemsBlock(props) {
  const {newsItems} = props;

  return (
    <div>
      <ul className="news">
        {
          newsItems.map((newsItem, index) => {
            return (<li key={index}>
              <NewsItem newsItem={newsItem}/>
            </li>);
          })
        }
      </ul>
    </div>
  );
}

export default NewsItemsBlock;