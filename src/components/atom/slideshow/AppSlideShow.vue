<template>
  <div class="slideshow">
    <div ref="swiperElement" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in products" :key="item.product">
          <img :src="item.image[0].url" />
          <div class="text-wrapper">
          <h2>{{ item.product}}
            <template v-if="item.sub">
            <span>{{item.sub}}</span>
            </template>
          </h2>
          <p>{{ item.description}}</p>
        </div>
        </div>
      </div>
  </div>
  <button class="swiper-button-prev left" @click="previousSlide"></button>
  <button class="swiper-button-next right" @click="nextSlide"></button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Swiper } from 'swiper';
import vetemjolk from '/images/wheatly_desktop.jpg';
import vetegryn from '/images/wheatbarlow_desktop.jpg';
import vetegrot from '/images/wheatporridge_desktop.jpg';

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
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
    image: [
      {
        url: vetemjolk,
        alt: 'text',
      }],
  },
  {
    product: 'Vetegröt',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
    image: [
      {
        url: vetegrot,
        alt: 'text',
      }],
  },
  {
    product: 'Vetegryn',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
    image: [
      {
        url: vetegryn,
        alt: 'text',
      }],
  },
];

</script>

<style scoped lang="scss">
@import '_slideshow.scss'
</style>
