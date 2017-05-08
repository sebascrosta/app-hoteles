(function() {

    'use strict';
    angular
        .module('filterList')
        .component('filterStars',{
            controller: filterStarsController,
            templateUrl:"result/filter/filter-stars/filter-stars.html",
            require: {
                hotelsResultController: '^hotelsResultRoot'
            },
            bindings: {
                filters:'<'
            }
        }).filter('filterStars',function () {

        return function (hotels,stars) {
            return hotels.filter(function (hotel) {
                if(stars.length == 0){
                    return true
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
        };

        this.filterByStars = function (star) {
            if(self.filters.stars.indexOf(star)>-1){
                self.filters.stars.splice(self.filters.stars.indexOf(star),1);
            }else{
                self.filters.stars.push(star);
            }
        };
    }

})();