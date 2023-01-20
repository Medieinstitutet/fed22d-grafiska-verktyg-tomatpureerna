<template>
  <div class="slideshow">
    <div ref="swiperElement" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in products" :key="item.product">
          <img :src="item.image[0].url" :alt="item.image[0].alt" />
          <div class="text-wrapper">
          <h4>{{ item.product}}
            <template v-if="item.sub">
            <span>{{item.sub}}</span>
            </template>
          </h4>
          <p>{{ item.description}}</p>
        </div>
        </div>
      </div>
  </div>
    <button aria-label="leftButton" class="swiper-button-prev left" @click="previousSlide"></button>
    <button aria-label="rightButton" class="swiper-button-next right" @click="nextSlide"></button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Swiper } from 'swiper';
import vetemjolk from '/images/wheatly_desktop.webp';
import vetegryn from '/images/wheatbarlow_desktop.webp';
import vetegrot from '/images/wheatporridge_desktop.webp';

// Vi sparar HTML-elementet som innehåller våra slides i en variabel
const swiperElement = ref(null);
// Och så behöver vi en variabel för själva slideshowen
const slideshow = ref(null);
// När HTML-koden är redo så kallar vi på "setupSwiper"
onMounted(() => {
  setupSwiper();
});

function setupSwiper() {
  // Spara swipern i en variabel som heter slideshow (vi måste skriva slideshow.value pga. Vue)
  slideshow.value = new Swiper(swiperElement.value, {
    speed: 400,
    spaceBetween: 50,
    slidesPerView: 1,
    breakpoints: {
      744: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    loop: 'true',
  });
}

// Denna bläddrar till vänster och anropas från HTML-delen
function previousSlide() {
  slideshow.value.slidePrev();
}
// Denna bläddrar till höger och anropas från HTML-delen
function nextSlide() {
  slideshow.value.slideNext();
}
const products = [
  {
    product: 'Vetemjölk',
    sub: 'original',
    description: 'Precis som "vanlig" mjölk men helt vegansk och utan onödiga tillsatser. Dricks med gott samvete!',
    image: [
      {
        url: vetemjolk,
        alt: 'Vetemjölk',
      }],
  },
  {
    product: 'Vetegröt',
    description: 'En slät och len gröt för dig som inte gillar havrens vassa gryn. Lagom mycket smak för den kräsne.',
    image: [
      {
        url: vetegrot,
        alt: 'Vetegröt',
      }],
  },
  {
    product: 'Vetegryn',
    description: 'Bearbetade gryn från vetekornet. Perfekt för tex granola eller som grund till eget mjöl.',
    image: [
      {
        url: vetegryn,
        alt: 'Vetegryn',
      }],
  },
];

</script>

<style scoped lang="scss">
@import '_slideshow.scss'
</style>
