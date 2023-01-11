console.log('hallå');

const productCardArray = [
  {
    product: 'Vetemjölk',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
    image: [
        {
            src:,
            alt:,
        },
        {
            src:,
            alt:,
        }
    ]
},
  {
    product: 'Vetegröt',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
  },
  {
    product: 'Vetegryn',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
  }
];

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
