'use strict';
import SeriesInfoView from 'series-info-view';

export default function () {
  fetch(`http://gateway.marvel.com:80/v1/public/series/548/characters?apikey=e5758327dc82abb92b83ef12f459ff4e`)
  .then((response) => response.json())
  .then((info) => {
    const element = document.querySelector(`.series-details-sidebar`);
    const profile = new SeriesInfoView(element, info.data.results[0]);
  });
}
