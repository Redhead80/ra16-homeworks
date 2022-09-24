// Главная страница

import BroadcastBlock from "./BroadcastBlock";
import CoursesBlock from "./CoursesBlock";
import NewsBlock from "./NewsBlock";
import SearchBlock from "./SearchBlock";
import TVBlock from "./TVBlock";
import VisitingBlock from "./VisitingBlock";
import WeatherBlock from "./WeatherBlock";

function NotYandex(props) {
  return (
    <div>
      <NewsBlock
        categories={props.newsCategories}
        news={props.news}>
      </NewsBlock>
      <CoursesBlock
        courseItems={props.courseItems}
      />
      <SearchBlock
        searchCategoryItems={props.searchCategoryItems}
      />
      <WeatherBlock
        weatherItem={props.weatherItem}
      />
      <VisitingBlock
        visitingItems={props.visitingItems}
      />
      <TVBlock
        tvItems={props.tvItems}
      />
      <BroadcastBlock
        broadcastItems={props.broadcastItems}
      />
    </div>
  )
}

export default NotYandex;