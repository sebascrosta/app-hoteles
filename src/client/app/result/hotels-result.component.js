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
        _self.hotels = []

        this.$onInit = function(){
            HotelResultService.getHotels()
                .then(function success(response) {
                    _self.hotels = response.listHotel;
                    _self.filters = response.filters;
                }, function error(error) {
                    console.log(error);
                });
            return _self.hotels;
        };
    }

})();