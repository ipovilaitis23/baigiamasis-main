
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
        // 600: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //     loop: false,
        // },
        1600: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
        }
    }
  });
  document.getElementById("defaultOpen").click();
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-text");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function burger() {
    var burger = document.getElementById("navlinks");
    if (burger.style.display === "block") {
      burger.style.display = "none";
    } else {
      burger.style.display = "block";
    }
  } 