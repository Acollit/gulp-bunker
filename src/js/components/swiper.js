import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.gallarey__swiper', {
  slidesPerView: 1,
  spaceBetween: 25,

  pagination: {
    el: '.gallarey__pag',
    
  }
});
