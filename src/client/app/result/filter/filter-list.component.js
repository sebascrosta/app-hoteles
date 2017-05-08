(function(){
    angular
        .module('filterList')
        .component('filterList', {
            templateUrl: 'result/filter/filter-list.html',
            controller: filterListController,
            bindings: {
                filters: '<'
            },
            require: {
                hotelsResultController: '^hotelsResultRoot'
            }
        })

    function filterListController(){
        var self = this;

        this.clearFilters = function () {
            self.hotelsResultController.$onInit();
        }

    }
})();
