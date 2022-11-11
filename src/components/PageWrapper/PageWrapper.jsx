import React from 'react';
import { Outlet, useLocation  } from 'react-router-dom';

import './PageWrapper.css';

import Navigation from '../Navigation/Navigation';
import AdvertaPic1 from '../../images/adverta_banner1.png';
import AdvertaPic2 from '../../images/adverta_banner2.png';
import AdvertaPic3 from '../../images/adverta_banner3.png';

function PageWrapper() {
  const location = useLocation();

  return (
      <main className="pageWrapper">
        <div className="pageWrapper__container">
          <div className="pageWrapper__content">
            <div className="aside-block">
              <Navigation />
              <div className="adverts-block">
                <div className="adverts-block__aside-item">
                  <img src={AdvertaPic1} alt="Картинка" />
                </div>
                <div className="adverts-block__aside-item">
                  <img src={AdvertaPic2} alt="Картинка" />
                </div>
              </div>
            </div>
            {/* На месте Outlet всегда будут показываться дочерние компоненты указанные в массивае children из массива routes */}
            <Outlet />
            {/* Блок показываем Только на главной: */}
            <div className={`adverts-block adverts-block_type_right-side ${location.pathname !== '/' && "display-none"}`}>
              <div className="adverts-block__adverts-item">
                <img src={AdvertaPic1} alt="Картинка" />
              </div>
              <div className="adverts-block__adverts-item">
                <img src={AdvertaPic2} alt="Картинка" />
              </div>
              <div className="adverts-block__adverts-item">
                <img src={AdvertaPic3} alt="Картинка" />
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default PageWrapper;