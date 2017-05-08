class HotelsService {

    static get (){

        var _self = this;
        _self.hotelsList = [
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67533"},
                "name":"Hotel Emperador",
                "stars":"3",
                "price":1596.0,
                "images": [
                    "https://media-cdn.tripadvisor.com/media/photo-s/07/9c/8b/8b/hotel-yurbban-trafalgar.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa",
                    "pl":"pool"
                }
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67534"}
                ,"name":"Petit Palace San Bernardo",
                "stars":"4",
                "price":2145.0,
                "images": [
                    "http://www.college-hotel.com/client/cache/contenu/_500____college-hotelp1diapo1_718.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67535"},
                "name":"Hotel Nuevo Boston",
                "stars":"2",
                "price":861.0,
                "images": [
                    "https://media-cdn.tripadvisor.com/media/photo-s/06/d3/df/d1/hotel-sofitel-legend.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67536"},
                "name":"Aquarius Casino Resort",
                "stars":"1",
                "price":450.0,
                "images": [
                    "https://media-cdn.tripadvisor.com/media/photo-s/04/29/56/bb/hotel-garbi-ibiza-spa.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67537"},
                "name":"The Orleans Hotel and Casino",
                "stars":"5",
                "price":3250.0,
                "images": [
                    "https://media-cdn.tripadvisor.com/media/photo-s/0a/0c/8a/d9/fachada-do-hotel-com.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67538"},
                "name":"Aquarius Casino Resort",
                "stars":"3",
                "price":1350.0,
                "images": [
                    "https://media-cdn.tripadvisor.com/media/photo-s/0a/88/64/e2/exterior-hotel.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67539"},
                "name":"Sheraton Dallas Hotel",
                "stars":"4",
                "price":3000.0,
                "images": [
                    "https://cdn.kiwicollection.com/media/property/PR010997/xl/010997-wes3786ex-144833-Hotel%20Exterior.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            }
        ];

        _self.filters = {
            "defaultName": "",
            "customName" : "",
            "price":{
                "minPrice" : 0,
                "maxPrice": 3500,
            },
            "numberStars": ["1","2","3","4","5"],
            "stars":[],
            "numberHotels": ["7","1","1","2","2","1"]
        };

        return new Promise(function(resolve, reject){
            resolve({
                      "listHotel":_self.hotelsList,
                      "filters":_self.filters
                    });
        })
    }

}

module.exports = HotelsService;