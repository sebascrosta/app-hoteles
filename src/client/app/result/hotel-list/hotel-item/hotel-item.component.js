(function() {
    'use strict';

    angular
        .module('hotelsResult')
        .component('hotelItem',{
            controller: HotelItemController,
            bindings: {
                hotel: '<'
            },
            templateUrl:"result/hotel-list/hotel-item/hotel-item.html"
        });

        function HotelItemController(){
            this.stars = function(){
                return Array(parseInt(this.hotel.stars))
            }

            this.getIcon = function (key){
                var icons = {
                    wifi: "class amt-internet",
                    sp: "class amt-spa",
                    tel: "class amt-phone",
                    pl: "class amt-pool"
                }
            return icons[key];
            }
        }
})();