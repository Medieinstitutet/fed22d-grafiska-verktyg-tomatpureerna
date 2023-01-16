<template>
  <div>
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
      <button class="swiper-button-prev" @click="previousSlide"></button>
    <button class="swiper-button-next" @click="nextSlide"></button>
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { Swiper } from 'swiper';
import 'swiper/css/navigation';
import vetemjolk from '/images/wheatly_desktop.jpg';
import vetegryn from '/images/wheatbarlow_desktop.jpg';
import vetegrot from '/images/wheatporridge_desktop.jpg';


import './style.scss';

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
    spaceBetween: 100,
    slidesPerView: 1,
    breakpoints: {
      744: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 40,
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
<style>
.swiper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
  padding-left: 50px;
  padding-right: 50px;

}

.swiper-slide {
  width: 88%;
  height: auto;
  margin-top:5px;
  margin-bottom: 10px;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px #18978F);
}
.text-wrapper {
  padding-left:20px;
  padding-right:20px;
}
h2 {
  font-family: Rubik Mono One;
  letter-spacing: 0.1rem;

}
h2 span {
    font-size: 1rem;
    color: #18978F;
}
p {
  font-family: Rubik;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  line-height: 24px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 46%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

}
.swiper-button-next, .swiper-button-prev{
    color: black;
    border: none;
    position:absolute;
    background: none;
}
.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 25px;
  font-weight: bold;
}

@media screen and (min-width: 744px) {
  .swiper-wrapper {
    width: 90%;
    margin-right: 50px;
  }
  .swiper-slide-next {
    width: 32%;
  }
  .swiper-slide-active, .swiper-slide-duplicate-prev, .swiper-slide-prev, .swiper-slide-duplicate-active{
    opacity: 50%;
    height: 300px;
    overflow: hidden;
    margin-top: 50px;
  }
  
}
</style>
