




    insertRideDestinations = function () {
        $.each(response.zones, function(i, item) {
            $( '<option value="'+ item.zone +'"> '+item.name+' </option>' ).appendTo( "#fare-calc-destination" );
        });
    },


    insertRideTimeOptions = function (times) {
        times.forEach(function(t) {
            $( '<option value="'+ item.type +'"> '+item.type+' </option>' ).appendTo( "#fare-calc-ride-time" );
        });
    },

    extractRideTimes = function (zone) {
        var rideTimes  = [];

        $.each(zone.fares, function(i, item) {
            var fareType = item.type

            if (rideTimes.includes(fareType)) {
                console.log(fareType +' is repeated');
            } else {
                fareType.push(rideTimes);
            }
        });

        insertRideTimeOptions(rideTimes);
    },




    loadAsset = function () {
        $.getJSON("fares.json", function(response){
            insertRideDestinations(response);
            extractRideTimes(response.zones[0]);
        });
    },



    updateTotal = function () {
        console.log('boom form changed');
    },



    $('fare-calc-form').change(function() {
        updateTotal;
    });


$(document).ready(function() { 
    loadFormElements();
});
