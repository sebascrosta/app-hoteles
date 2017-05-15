(function() {

    'use strict';
    angular
        .module('filterList')
        .component('filterStars',{
            controller: filterStarsController,
            templateUrl:"result/filter/filter-stars/filter-stars.html",
            bindings: {
                filters:'<'
            }
        }).filter('filterStars',function () {

        return function (hotels,stars) {
            return hotels.filter(function (hotel) {
                if(stars.length == 0){
                    return true;
                }else{
                    return stars.indexOf(hotel.stars)>-1;
                }
            })

        }
    });

    function filterStarsController(){

        var self = this;

        this.numberStars = function (number) {
            return Array(parseInt(number));
        };

        this.allStars = function () {
            self.filters.stars = [];

            for(var i = 1; i < self.filters.starValue.length ; i++){
                self.filters.starValue[i] = false;
            }

            self.filters.starValue[0] = true;
        };

        this.filterByStars = function (star) {
            if(self.filters.stars.indexOf(star)>-1){
                self.filters.stars.splice(self.filters.stars.indexOf(star),1);
            }else{
                self.filters.stars.push(star);
            }

            self.filters.starValue[0] = false;

            if (self.filters.starValue[1] &&
                self.filters.starValue[2] &&
                self.filters.starValue[3] &&
                self.filters.starValue[4] &&
                self.filters.starValue[5])

                self.allStars();
        };
    }

})();