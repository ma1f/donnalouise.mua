import scroll from './scroll';

// set [data-scroll] position on html element
// use css rules such as the following to detect scroll position
//    html:not([data-scroll='0']){ ... }
scroll();

let open = document.getElementsByClassName('open')[0];
let close = document.getElementsByClassName('close')[0];
let menu = document.getElementsByClassName('menu')[0];

open.addEventListener('click', () => {
    menu.classList.toggle('active');
});

close.addEventListener('click', () => {
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
