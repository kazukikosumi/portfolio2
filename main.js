// nav button
const nav_button = () => {
    $('.nav_area').each(function () {
        if (!$(this).hasClass('nav_area_active')) {
            $(this).addClass('nav_area_active')
        } else if ($(this).hasClass('nav_area_active')) {
            $(this).removeClass('nav_area_active');
        }
    })
    $('.nav_button').each(function () {
        if (!$(this).hasClass('nav_button_close')) {
            $(this).addClass('nav_button_close')
        } else if ($(this).hasClass('nav_button_close')) {
            $(this).removeClass('nav_button_close');
        }
    })
}

// nav area
const link_button = () => {
  $('.nav_area').each(function () {
      if ($(this).hasClass('nav_area_active')) {
        $(this).removeClass('nav_area_active');
      } 
  })
}

const link_button2 = () => {
  $('.nav_area').each(function () {
      if ($(this).hasClass('nav_area_active')) {
        $(this).removeClass('nav_area_active');
      } 
  })
}

const link_button3 = () => {
  $('.nav_area').each(function () {
      if ($(this).hasClass('nav_area_active')) {
        $(this).removeClass('nav_area_active');
      } 
  })
}

// top link logo
if (window.matchMedia('(max-width: 768px)').matches) {
document.addEventListener("DOMContentLoaded", (event) => {
    const pageTop = document.getElementById("page-top"); // ボタンの要素を取得
  
    window.addEventListener("scroll", () => {
      // 一定のスクロール位置を超えたらクラスを追加して表示
      if (window.scrollY > 700) {
        pageTop.classList.add("link_logo_active");
      } else {
        pageTop.classList.remove("link_logo_active");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", (event) => {
    const pageTop = document.getElementById("page-top"); // ボタンの要素を取得
  
    window.addEventListener("scroll", () => {
      // 一定のスクロール位置を超えたらクラスを追加して表示
      if (window.scrollY > 2000) {
        pageTop.classList.add("link_logo_up");
      } else {
        pageTop.classList.remove("link_logo_up");
      }
    });
  });

} else {
  document.addEventListener("DOMContentLoaded", (event) => {
    const pageTop = document.getElementById("page-top"); // ボタンの要素を取得
  
    window.addEventListener("scroll", () => {
      // 一定のスクロール位置を超えたらクラスを追加して表示
      if (window.scrollY > 700) {
        pageTop.classList.add("link_logo_active");
      } else {
        pageTop.classList.remove("link_logo_active");
      }
    });
  });
}

  // スライダー
  if (window.matchMedia('(max-width: 768px)').matches) {
    $(document).ready(function(){
      $('.slider').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="prev_icon" aria-label="Previous" type="button"><img src="./img/up.png" alt="Previous"></button>',
        nextArrow: '<button class="next_icon" aria-label="Next" type="button"><img src="./img/down.png" alt="Next"></button>',
        dots: false,
      });
    });

  } else {
    $(document).ready(function(){
      $('.slider').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="prev_icon" aria-label="Previous" type="button"><img src="./img/up.png" alt="Previous"></button>',
        nextArrow: '<button class="next_icon" aria-label="Next" type="button"><img src="./img/down.png" alt="Next"></button>',
        dots: false,
      });
    });
  }


  // file1 content
  const slider_button = () => {
    $('.file1_item').each(function () {
        if (!$(this).hasClass('file1_item_active')) {
          $('.file1_item2').removeClass('file1_item_active');
          $('.file1_item3').removeClass('file1_item_active');
          $('.file1_item4').removeClass('file1_item_active');
          $('.file1_item5').removeClass('file1_item_active');
          $(this).addClass('file1_item_active');
        } 
    })
  }

  const slider_button2 = () => {
    $('.file1_item2').each(function () {
        if (!$(this).hasClass('file1_item_active')) {
          $('.file1_item').removeClass('file1_item_active');
          $('.file1_item3').removeClass('file1_item_active');
          $('.file1_item4').removeClass('file1_item_active');
          $('.file1_item5').removeClass('file1_item_active');
          $(this).addClass('file1_item_active');
        } 
    })
  }

  const slider_button3 = () => {
    $('.file1_item3').each(function () {
        if (!$(this).hasClass('file1_item_active')) {
          $('.file1_item').removeClass('file1_item_active');
          $('.file1_item2').removeClass('file1_item_active');
          $('.file1_item4').removeClass('file1_item_active');
          $('.file1_item5').removeClass('file1_item_active');
          $(this).addClass('file1_item_active');
        } 
    })
  }

  const slider_button4 = () => {
    $('.file1_item4').each(function () {
        if (!$(this).hasClass('file1_item_active')) {
          $('.file1_item').removeClass('file1_item_active');
          $('.file1_item2').removeClass('file1_item_active');
          $('.file1_item3').removeClass('file1_item_active');
          $('.file1_item5').removeClass('file1_item_active');
          $(this).addClass('file1_item_active');
        } 
    })
  }

  const slider_button5 = () => {
    $('.file1_item5').each(function () {
        if (!$(this).hasClass('file1_item_active')) {
          $('.file1_item').removeClass('file1_item_active');
          $('.file1_item2').removeClass('file1_item_active');
          $('.file1_item3').removeClass('file1_item_active');
          $('.file1_item4').removeClass('file1_item_active');
          $(this).addClass('file1_item_active');
        } 
    })
  }