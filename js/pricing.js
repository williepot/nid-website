var products = {
    "amado-s-garcinia": "$19.99",
    "amado-fiber": "$25.99",
    "amado-tea": "$43.99",
    "amado-shireru": "$25.99",
    "bsecret-cream": "$12.49",
    "bsecret-mask": "$12.49",
    "bsecret-congasia": "$13.79",
    "deal-1" : "$22.48",
    "deal-2" : "$99.99",
    "deal-3" : "$43.39",
    "deal-4" : "$73.99",
    "deal-5" : "$109.99"
};


$(document).ready(function(){

    $.each(products, function(i, val) {
        $("#prod-" + i).append(val);
    });

});
