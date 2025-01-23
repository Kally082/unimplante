$(document).on('ready', function () {
  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<a class="slick-prev" style="font-size: 7rem;"><i class="bx bx-chevron-left"></i></a>',
    nextArrow: '<a class="slick-next" style="font-size: 7rem;"><i class="bx bx-chevron-right"></i></a>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $(".regular2").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<a class="slick-prev" style="font-size: 4rem;"><i class="bx bx-chevron-left"></i></a>',
    nextArrow: '<a class="slick-next" style="font-size: 4rem;"><i class="bx bx-chevron-right"></i></a>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modals = {
    geral: document.getElementById('modal-geral'),
    estetica: document.getElementById('modal-estetica'),
    implantodontia: document.getElementById('modal-implantodontia'),
    endodontia: document.getElementById('modal-endodontia'),
    cirurgias: document.getElementById('modal-cirurgias'),
    odontologia: document.getElementById('modal-odontologia'),
  };

  const cards = {
    geral: document.getElementById('card-geral'),
    estetica: document.getElementById('card-estetica'),
    implantodontia: document.getElementById('card-implantodontia'),
    endodontia: document.getElementById('card-endodontia'),
    cirurgias: document.getElementById('card-cirurgias'),
    odontologia: document.getElementById('card-odontologia'),
  };

  Object.keys(cards).forEach((key) => {
    const card = cards[key];
    const modal = modals[key];
    const closeModal = modal.querySelector('.close');

    card.addEventListener('click', (event) => {
      event.preventDefault();
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  });
});

const menuIcon = document.getElementById('menu-icon');
const menuItems = document.getElementById('menu-items');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
  const isMenuOpen = menuItems.style.display === 'flex';
  
  menuItems.style.display = isMenuOpen ? 'none' : 'flex';
  overlay.style.display = isMenuOpen ? 'none' : 'block';
});

menuItems.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && menuItems.style.display === 'flex') {
    menuItems.style.display = 'none';
    overlay.style.display = 'none';
    
  }
});

overlay.addEventListener('click', () => {
  menuItems.style.display = 'none';
  overlay.style.display = 'none';
});
