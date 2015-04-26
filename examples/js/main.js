$(window).load(function () {
    console.log("A");
    $('.typeahead').typeahead({source: function (q, callback) {
        console.log(q);
        callback([q]);
    }})
});