let title = document.querySelector('.home__title');
let description = document.querySelector('.home__description');
let arrow = document.querySelector('.home__contact div');
let contact = document.querySelector('.home__contact');
let icons = document.querySelectorAll('.social-media__icon');
let buildings = document.querySelector('.buildings path');

let tl = gsap.timeline({});

tl.fromTo(title, {opacity: 0}, {opacity: 1, duration: 1.5, delay: .5}, 0);
tl.fromTo(description, {opacity: 0, y: -10}, {opacity: 1, y: 0, duration: .7, delay: 1.5}, 0)
tl.fromTo(contact, {opacity: 0, y: 15}, {opacity: 1, y: 0, duration: .3, delay: 2}, 0)
tl.fromTo(arrow, {opacity: 0, x: -20}, {opacity: 1, x: 0, duration: .7, delay: 2.6}, 0)
tl.staggerFromTo(icons, .2, {x: -5},{x: 0,opacity: 1, delay: 2.8,}, .1, 0)
tl.fromTo(buildings, {opacity: 0}, {opacity: .4, delay: 3.5}, 0)
