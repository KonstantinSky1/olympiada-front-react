import React from "react";
import { useLoaderData } from 'react-router-dom';

import './NewsItemOpen.css';

import pic1 from '../../images/olymp-news-item-user-img.png';
import pic2 from '../../images/news-item-content-image.png';

function NewsItemOpen() {
  const post = useLoaderData();

  return (
    <section className="news-item-open">
      {/* <h4 className="news-item-open__title">Подведены итоги олимпиады по английскому языку</h4> */}
      {
        post && (
          <h4 className="news-item-open__title">{post.title}</h4>
        )
      }
      
      <div className="news-item-open__user-info-block">
        <div className="news-item-open__user-info">
          <div className="news-item-open__user-info-imageBlock">
            <img src={pic1} alt="Картинка" />
          </div>
          <p className="news-item-open__user-info-text">Михаил Иванов, КазНТУ им.Сатпаева</p>
        </div>
        <p className="news-item-open__date">20.09.2022</p>
      </div>
      <div className="news-item-open__contentBlock">
        <div className="news-item-open__content-imageBlock">
          <img src={pic2} alt="Картинка" />
        </div>
        <div className="news-item-open__content-textBlock">
          {
            post && (
              <>
                <p className="news-item-open__content-text-item">{post.body}</p>
                <p className="news-item-open__content-text-item">АСТАНА. КАЗИНФОРМ – Около 1200 казахстанцев обучаются по стипендиальной программе «Болашак» в ведущих зарубежных вузах мира. Из них 50 обладателей президентской стипендии учатся в престижнейших университетах мира, входящие в Лигу плюща. Это Гарвардский, Колумбийский, Йельский, Принстонский, Брауновский, Дартмутский, Корнелльский университеты и Университет Пенсильвании, передает МИА «Казинформ» со ссылкой на пресс-службу Министерства науки и высшего образования Республики Казахстан.</p>
                <p className="news-item-open__content-text-item">«Один из лучших факторов учебы в Лиге плюща считаю, что у нас есть уникальная возможность учиться у знаменитых ученых, среди которых немало Нобелевских лауреатов и обладателей других престижных наград. В университете я изучаю искусственный интеллект, а также взяла классы из бизнес-школы, чтобы понять, как выстроить стратегию на долгосрочную перспективу. Казахстанский телеком-рынок на пороге большой трансформации и приобретает привлекательность для потенциальных инвесторов. После завершения обучения, хочу строить свою деятельность в этих направлениях и внести свой вклад в развитие IT и коммуникаций в Казахстане», - поделилась болашаковец Айгерим Кдыргалиева.</p>
                <p className="news-item-open__content-text-item">Айгерим учится в магистратуре Колумбийского университета по программе «Болашак», где изучает электронику и телекоммуникационные системы.</p>
                <p className="news-item-open__content-text-item">За 29-летнюю историю существования стипендии выпускниками международной программы «Болашак» стали более 11 тыс. 700 казахстанцев. Они получили образование в более чем 200 ведущих университетах мира.</p>
              </>
            )
          }
        </div>
      </div>
    </section>
  );
}

export default NewsItemOpen;