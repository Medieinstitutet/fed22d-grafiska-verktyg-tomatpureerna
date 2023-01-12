console.log('hallå');

const productCardArray = [
  {
    product: 'Vetemjölk',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
    image: [
      {
        src: './images/wheatly_productcard.jpg',
        alt: 'text',
      }],
  },
  {
    product: 'Vetegröt',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
    image: [
      {
        src: './images/wheatporridge_productcard.jpg',
        alt: 'text',
      }],
  },
  {
    product: 'Vetegryn',
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Mer lorem Ipsum för folket!',
    image: [
      {
        src: './images/wheat_productcard_desktop.jpg',
        alt: 'text',
      }],
  },
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
function displayProducts() {
  const productPlacement = document.querySelectorAll('.swiper-slide');

  for (let i = 0; i < productCardArray.length; i++) {
    const printProductcards = `<img class="product__image" id="img-${i}" src="${productCardArray[i].image}" alt="${productCardArray[i].image.alt}" width="260" height="185">
                                <h2>${productCardArray[i].product}</h2>
                                <p>${productCardArray[i].description}</p>`;
    productPlacement[i].innerHTML = printProductcards;
  }
}
displayProducts();