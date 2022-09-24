import './App.css';
import NotYandex from './components/NotYandex';

function App() {
  const newsCategories = [
    {title: 'Сейчас в СМИ'},
    {title: 'в Германии'},
    {title: 'Рекомендуем'},
  ];

  const news = [
    {icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1047-1478692902215-square/logo-square', text: 'Финский историк Ялонен предложил Западу вступить в военный конфликт с Россией'},
    {icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square', text: 'Совет Госдумы рассмотрит в понедельник предложение о внеочередном заседании палаты 15 июля'},
    {icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1048-1478692902313-square/logo-square', text: 'Экс-президент Польши Валенса призвал сократить население России до 50 млн человек'},
    {icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1048-1478692902313-square/logo-square', text: 'Министр обороны Украины признал большие потери и истощение войск'},
    {icon: 'https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square', text: 'Мэр Москвы Собянин сообщил об одном погибшем и десяти пострадавших в результате урагана'},
  ];

  const courses = [
    {name: "USD MOEX", value: "63,25", change: "+0,09"},
    {name: "EUR MOEX", value: "70,86", change: "+0,14"},
    {name: "НЕФТЬ", value: "64,90", change: "+1,63%"},
  ];

  const tvItems = [
    {time: "02:00", name: "ТНТ.Best", channel: "THT International"},
    {time: "02:15", name: "Джинглики", channel: "Карусель INT"},
    {time: "02:25", name: "Наедине со всеми", channel: "Первый"},
  ];

  const weatherItem = {
    image: "https://цнирш.рф/uploads/s/k/v/r/kvrpf1isjgnu/img/full_A9aaxelB.jpg",
    currentTemp: "+17",
    morningTemp: "+17",
    dayTemp: "+20",
  }

  const visitingItems = [
    {source: "Недвижимость", text: "о сталинках"},
    {source: "Маркет", text: "люстры и светильники"},
    {source: "Авто.ру", text: "привод 4х4 до 500 000"},
  ];

  const broadcastItems = [
    {text: "Управление как искусство", source: "Успех"},
    {text: "Ночь. Мир в это время", source: "earthTV"},
    {text: "Андрей Возн...", source: "Совершенно секретно"},
  ];

  const searchCategoryItems = [
    {text: "Видео"},
    {text: "Картинки"},
    {text: "Новости"},
    {text: "Карты"},
    {text: "Маркет"},
    {text: "Переводчик"},
    {text: "Эфир"},
    {text: "ещё"},
  ];

  return (
    <NotYandex 
      newsCategories={newsCategories}
      news={news}
      courseItems={courses}
      searchCategoryItems={searchCategoryItems}
      weatherItem={weatherItem}
      visitingItems={visitingItems}
      tvItems={tvItems}
      broadcastItems={broadcastItems}>
    </NotYandex>
  );
}

export default App;
