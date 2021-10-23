import scroll from './scroll.js';
import modal from './modal.js';

// set [data-scroll] position on html element
// use css rules such as the following to detect scroll position
//    html:not([data-scroll='0']){ ... }
scroll();
modal();

let open = document.querySelectorAll('.menu .open')[0];
let close = document.querySelectorAll('.menu .close')[0];
let menu = document.querySelectorAll('.menu')[0];

open.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("open menu");
    menu.classList.toggle('active');
});

close.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("open menu");
    menu.classList.toggle('active');
});

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }
