/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
  
const intro = document.querySelector('#intro');
const logo = document.querySelector('.logo-container img');
const introText = document.querySelector('#intro-text');
const lancamentosTitle = document.querySelector('.buttons h2');
const ultimosLancamentosTitle = document.querySelector('.obras h2');
const buttons = document.querySelectorAll('.btn');
const buildings = document.querySelector('.buildings');
const socialMedia = document.querySelectorAll('.social-media a img');


let tl = gsap.timeline({});

if (document.documentElement.clientWidth >= 1100) {
    tl.fromTo(intro, {opacity: 0, y: -8}, {opacity: 1, duration: .3, y: 0, delay: .3});
    tl.fromTo(logo, {opacity: 0, y: -8}, {opacity: 1, duration: .3, y: 0, delay: -.1});
    tl.fromTo(introText, {opacity: 0}, {opacity: 1, duration: .2});
    tl.fromTo(lancamentosTitle, {opacity: 0, x: -10}, {opacity: 1, x:0, duration: .4});
    tl.fromTo(ultimosLancamentosTitle, {opacity: 0, x: -10}, {opacity: 1, x:0, duration: .4});
    tl.staggerFromTo(buttons, .1, {opacity: 0, y: 15}, {opacity: 1, y: 0, duration: .2, delay: -.8}, .2)
    tl.fromTo(buildings, {opacity: 0, y: -15}, {opacity: 1, y:0, duration: .4}, '-=.25');
    tl.staggerFromTo(socialMedia, .1, {opacity: 0, x: -5, y: -20}, {opacity: 1, x: 0, y: 0, duration: .2}, .1)
} else {
    tl.fromTo(intro, {opacity: 0, y: -8}, {opacity: 1, duration: .3, y: 0, delay: .3});
    tl.fromTo(logo, {opacity: 0, y: -8}, {opacity: 1, duration: .3, y: 0, delay: -.1});
    tl.fromTo(introText, {opacity: 0}, {opacity: 1, duration: .2});
    tl.fromTo(buildings, {opacity: 0, y: -15}, {opacity: 1, y:0, duration: .4}, '-=.15');
    tl.fromTo(lancamentosTitle, {opacity: 0, x: -10}, {opacity: 1, x:0, duration: .4});
    tl.fromTo(ultimosLancamentosTitle, {opacity: 0, x: -10}, {opacity: 1, x:0, duration: .4});
    tl.staggerFromTo(buttons, .1, {opacity: 0, y: 15}, {opacity: 1, y: 0, duration: .25, delay: -.3}, .2)
    tl.staggerFromTo(socialMedia, .1, {opacity: 0, x: -5, y: -20}, {opacity: 1, x: 0, y: 0, duration: .2}, .1)
}

