'use strict';
const HotelsService = require('./hotels.service');


class HotelsController{

    static getHotels(req, res, next) {
        HotelsService.get()
            .then(function(hotels){
                res.json(hotels);
            })
    }

}

module.exports = HotelsController;
