var products = {
    "amado-s-garcinia": "$16.99",
    "amado-fiber": "$21.79",
    "amado-tea": "$36.99",
    "amado-shireru": "$21.79",
    "bsecret-cream": "$10.49",
    "bsecret-mask": "$10.49",
    "bsecret-congasia": "$11.49",
    "deal-1" : "$TBA",
    "deal-2" : "$TBA",
    "deal-3" : "$TBA",
    "deal-4" : "$TBA",
    "deal-5" : "$TBA"
};


$(document).ready(function(){

    $.each(products, function(i, val) {
        $("#prod-" + i).append(val);
    });

});
