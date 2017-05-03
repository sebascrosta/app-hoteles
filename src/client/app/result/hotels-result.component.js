(function(){
    angular
        .module('hotelsResult')
        .component('hotelsResultRoot', {
            controller: HotelResultController,
           templateUrl:'result/hotels-result.html'
        });

    HotelResultController.$inject = ['HotelResultService'];

    function HotelResultController(HotelResultService){

        var _self = this;

        this.$onInit = function(){
            console.log('Entra al onInit')
            HotelResultService.getHotels()
                .then(function success(response) {
                    _self.hotels = response;
                }, function error(error) {
                    console.log(error);
                });
            return _self.hotels;
        };
    }

})();