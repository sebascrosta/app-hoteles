(function(){
    angular
        .module('hotelsResult')
        .component('hotelsResultRoot',{
            controller: HotelResultController,
           templateUrl:'result/hotels-result.html'
        });
    HotelResultController.$inject = ['HotelResultService'];

    function HotelResultController(HotelResultService){

        var _self = this;

        this.$onInit = function(){
            _self.hotels = HotelResultService.getHotels();
            return _self.hotels;
        };
    }

})();