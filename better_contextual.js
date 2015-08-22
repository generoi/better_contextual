(function ($) {
  'use strict';

  Drupal.behaviors.betterContextual = {
    attach: function (context) {
      // Quick fix which makes sure nested contextual link menus are shown when
      // clicked. This has some bugs but admins dont care.
      $(context).on('click', 'a.contextual-links-trigger', function () {
        $(this)
          .next('ul.contextual-links')
            .stop(true, true).slideToggle(100)
          .parent('div.contextual-links-wrapper')
            .toggleClass('contextual-links-active');

        return false;
      });
    }
  };
}(jQuery));
