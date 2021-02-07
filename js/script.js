/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', () => {
    var menu = document.querySelector('.header__information'),
    menuItem = document.querySelectorAll('.header_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__information_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__information_active');
        });
    });
});

$(document).ready(function() {
    $('.portfolio__categories').on('click', '.portfolio__switch:not(.portfolio__switch_active)', function() {
        $(this)
          .addClass('portfolio__switch_active').siblings().removeClass('portfolio__switch_active')
          .closest('div.container').find('div.portfolio__wrap').removeClass('portfolio__wrap_active').eq($(this).index()).addClass('portfolio__wrap_active');
      });
});