'use strict';

/**
 * @ngdoc service
 * @name smbApp.ColorIterator
 * @description
 * # ColorIterator
 */
angular.module('oz.ColorIterator', [])
  .service('ColorIterator', function ColorIterator() {
    return function () {
      this.colors = [];
      this.i = 0;
      this.setColors = function (colors) {
        this.colors = colors;
      };

      this.getColor = function () {
        var color = this.colors[this.i];
        this.i++;
        if (this.i >= this.colors.length) {
          this.i = 0;
        }
        return color;
      };

      this.reset = function () {
        this.i = 0;
      };
    };
  });
