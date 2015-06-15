ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 2,
            type: 'yandex#hybrid'
        })
    document.getElementById('plains_edges').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "plains_edges.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };

    document.getElementById('sea_edges').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "sea_edges.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };

    document.getElementById('buses_circles').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "buses_circles.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };
    document.getElementById('plains_circles').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "plains_circles.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };
    document.getElementById('trains_circles').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "trains_circles.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };
    document.getElementById('sea_circles').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "sea_circles.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };
    document.getElementById('citytrains_circles').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "citytrains_circles.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };

    document.getElementById('buses_color').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "buses_color.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };

    document.getElementById('planes_color').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "planes_color.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };

    document.getElementById('sea_color').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "sea_color.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };

    document.getElementById('trains_color').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "trains_color.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };

    document.getElementById('citytrains_color').onclick = function () {
        objectManager = new ymaps.ObjectManager({});
        myMap.geoObjects.removeAll();
        myMap.geoObjects.add(objectManager);

        $.ajax({
        url: "citytrains_color.json"
        }).done(function(data) {
            objectManager.add(data);
        });
    };
}