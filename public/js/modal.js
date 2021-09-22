export default function modal() {
  const offset = (el) => {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log({ top: rect.top + scrollTop, left: rect.left + scrollLeft });
    //return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    console.log(scrollTop); 
    console.log(rect.top + scrollTop); 
    return { top: rect.top, left: rect.left }
  };

  const modal = document.getElementById('modal')
  const desc = document.getElementById('modal-description');
  const image = document.getElementById('modal-image');
  const body = document.getElementsByTagName('body')[0];
  const close = document.getElementById('modal-close');
  const overlay = modal.querySelectorAll('#modal .overlay')[0];

  const openModal = (evt) => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    modal.classList.add('active');
    body.classList.add('no-scroll');

    let target = evt.target;
    let pos = offset(target);
    let img = evt.target.cloneNode();
    img.classList.add('shadow');
    
    image.style.padding = '0';
    image.style.top = pos.top+'px';
    image.style.left = pos.left+'px';
    image.style.width = target.width+'px';
    image.style.height = target.height+'px';
    image.appendChild(img);
    image.classList.add('animate');

    image.style.top = '0px';
    image.style.left = '0px';
    image.style.width = '100%';
    image.style.height = vh+'px';
    image.style.padding = '56px 24px 24px';
    console.log(image.style.height); 

    desc.innerHTML = target.dataset.description;
 
  };

  const closeModal = (evt) => {
    modal.classList.remove('active');
    body.classList.remove('no-scroll');
    image.classList.remove('animate');
    image.firstChild.remove();
    desc.innerHTML = '';
  };

  document.querySelectorAll('.modal').forEach(element => {
    element.addEventListener('click', openModal);
  });

  close.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  window.addEventListener('keyup', (evt) => {
    if (evt.key === "Escape")
      closeModal();
   });
};