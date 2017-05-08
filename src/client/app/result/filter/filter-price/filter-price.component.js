(function(){
    angular
        .module('filterList')
        .component('filterPrice',{
            templateUrl:'result/filter/filter-price/filter-price.html',
            controller: filterPriceController,
            controllerAs:"$ctrl",
            bindings: {
                filters: '<'
            },
            require: {
                hotelsResultController: '^hotelsResultRoot'
            }
        }).filter('filterPrice', function () {

            return function (hotels, price) {
                return hotels.filter(function (hotel) {
                    return (hotel.price >= price.minPrice &&
                            hotel.price <= price.maxPrice);
            })

        }
    });

    function filterPriceController(){

        this.sliderOptions = {
            options: {
                pushRange: true,
                step: 1
            }
        };

    }

})();

