export default function modal() {
  const offset = (el) => {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log({ top: rect.top + scrollTop, left: rect.left + scrollLeft });
    //return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    console.log(scrollTop); 
    console.log(rect.top + scrollTop); 
    return { top: parseInt(rect.top), left: parseInt(rect.left) }
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
    modal.classList.remove('fade-out');
    modal.classList.add('fade-in');
    body.classList.add('no-scroll');

    let target = evt.target;
    let pos = offset(target);
    let img = evt.target.cloneNode();
    img.classList.add('shadow');
    img.classList.remove('modal');
    
    let padding = (pos.top)+'px '+Math.max(vw-target.width-pos.left, 0)+'px '+Math.max(vh-target.height-pos.top, 0)+'px '+(pos.left)+'px'
    image.style.padding = padding;

    image.appendChild(img);
    image.classList.add('animate');

    desc.innerHTML = target.dataset.description;
 
  };

  const closeModal = (evt) => {
    modal.classList.add('fade-out');
    modal.classList.remove('active');
    modal.classList.remove('fade-in');
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