import React from "react";
import { useTranslation } from 'react-i18next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

export default function Building() {
  const { t } = useTranslation();
  return (
    <div id="building">
      <Header />
      <div id="title-content">
        <div>{t('building.title-content.1')}
          <br></br>
          {t('building.title-content.2')}
        </div>
        <div id="image-content">
          <img id="image" src="" alt="Image error"/>
        </div>
        <div id="building-lever">
          <div>
          <img class="image" src="" alt="Image error"/>
          <div class="lever" id="building-lever1">{t('building.building-lever1')}</div>
          </div>
          <div class="arrow">
            <div class="arrow-final">&gt;</div>
          </div>

          <div>
          <img class="image" src="" alt="Image error"/>
          <div class="lever" id="building-lever2">{t('building.building-lever2')}</div>
          </div>
          <div class="arrow">
            <div class="arrow-final">&gt;</div>
          </div>

          <div>
          <img class="image" src="" alt="Image error"/>
          <div class="lever" id="building-lever3">{t('building.building-lever3')}</div>
          </div>
          <div class="arrow">
            <div class="arrow-final">&gt;</div>
          </div>

          <div>
          <img class="image" src="" alt="Image error"/>
          <div class="lever" id="building-lever4">{t('building.building-lever4')}</div>
          </div>
          <div class="arrow">
            <div class="arrow-final">&gt;</div>
          </div>

          <div>
          <img class="image" src="" alt="Image error"/>
          <div class="lever" id="building-lever5">{t('building.building-lever5')}</div>
          </div>
        </div>
        <div id="blank"></div>
      </div>
      <Footer />
    </div>
  );
}
