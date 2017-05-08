(function(){
    angular
        .module('filterList')
        .component('filterName',{
            templateUrl:'result/filter/filter-name/filter-name.html',
            controller: filterNameController,
            bindings: {
                filters: '<'
            }
        }).filter('filterName',function () {
    return function (hotels, customName) {
        return hotels.filter(function (hotel) {
            return hotel.name.toLowerCase().indexOf(customName.toLowerCase()) != -1;
        })

    }
});
function filterNameController(){
    var self = this;

    this.filterByName = function () {
        self.filters.customName = self.filters.defaultName;
    }
}

})();