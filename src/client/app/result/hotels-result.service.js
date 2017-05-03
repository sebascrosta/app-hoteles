(function(){
    'use strict';

    angular
        .module('hotelsResult')
        .service('HotelResultService', HotelResultService);

    HotelResultService.$inject = ['$http'];

    function HotelResultService($http){

        this.getHotels = getHotels;

        function getHotels() {
            console.log('Service del Client. ACA SI')
            return $http.get('/api/hotels')
                .then(function (response) {
                    return response.data;
                });
        }

    }

})();

