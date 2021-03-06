import React from 'react';

import classes from './MainPageContent.module.css';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import PromoCarusel from '../../components/PromoCarusel/PromoCarusel';
import LinkButton from '../../components/LinkButton/LinkButton';
import TeamInfo from '../../components/TeamInfo/TeamInfo';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <main className={`container ${classes.MainPageContent}`}>

      <p className={classes.text}>Мы поможем вам собрать эко-подарок для самых разных людей! С помощью нескольких фильтров мы вместе составим идеальный набор для конкретного человека</p>

      <div className={classes.generator__container}>
        <LinkButton
          className={`${classes.link_button} ${classes.link_button__generator}`}
          title="Собрать подарок"
          text={'Собрать подарок'}
        />
      </div>

      <div className={classes.promocarusel_container}>
        <PromoCarusel />
      </div>

      <LinkButton
        className={classes.link_button}
        title="Перейти в каталог"
        text={'Перейти в каталог'} /
      >


    </main>
  );
};