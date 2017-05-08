(function() {
    'use strict';

    angular
        .module('hotelsResult')
        .component('hotelList',{
            bindings: {
                hotels:'<',
                filters:'<'
            },
            templateUrl:"result/hotel-list/hotel-list.html"
        });
})();