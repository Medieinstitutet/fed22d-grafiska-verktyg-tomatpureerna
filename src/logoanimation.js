import { gsap } from 'gsap';

/* Denna animation stannar 10px från vänster, inväntar en sekund, och roterar fyra varv.
100vw är startpositionen. */
gsap.fromTo('#header__logo__id', { left: '100vw' }, { left: '10px', delay: 1, rotate: -1440 });
