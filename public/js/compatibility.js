import webp from './webp.js';

// compatibility check - webp
webp('lossy', result => {
    document.documentElement.classList.add(result ? 'webp' : 'no-webp');
});
