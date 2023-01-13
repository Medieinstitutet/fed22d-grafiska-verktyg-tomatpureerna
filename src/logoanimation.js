
import {gsap} from 'gsap';

const logoanimation = document.querySelector('#header__logo__id');
gsap.to(logoanimation, { x: 500, delay: 1, rotate: 720 });

gsap.to('#header__logo__id', { x: 500, delay: 1, rotate: 720 });