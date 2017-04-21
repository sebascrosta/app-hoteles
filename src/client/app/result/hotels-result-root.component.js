(function(){
    angular
        .module('hotelsResult')
        .component('hotelsResultRoot',{
            controller: HotelsResultController,
           templateUrl:'result/hotel-results-root.html'
        });
    HotelResultController.$inject = ['HotelResultService'];

    function HotelResultController(HotelResultService){

        var _self = this;

        this.$onInit = function(){
            _self.hotels = HotelResultService.getHotels();
        };

    }

})();
