/* ----------------------------------------------

  simpleGal v2.0.0

  Author: Steve Rydz
  URL: http://steverydz.com
  Twitter: @steverydz

  Plug-in URL: https://github.com/steverydz/simpleGal
  Demo URL: http://steverydz.github.io/simpleGal

  License: http://creativecommons.org/licenses/by-nc-sa/3.0/

  Last updated: 24/04/2013

---------------------------------------------- */

(function($){

  $.fn.extend({

    simpleGal: function (options) {

      var defaults = {
        mainImage: ".placeholder"
      };

      options = $.extend(defaults, options);

      return this.each(function () {

        var thumbnail = $(this).find("a");
        var mainImage = $(this).siblings().find(options.mainImage);

        thumbnail.on("click", function (e) {
          e.preventDefault();
          var galleryImage = $(this).attr("href");
          mainImage.attr("src", galleryImage);
        });

      });

    }

  });

})(jQuery);
