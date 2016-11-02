var products = {
    "amado-s-garcinia": "$TBA",
    "amado-fiber": "$TBA",
    "amado-tea": "$TBA",
    "amado-shireru": "$TBA",
    "bsecret-cream": "$TBA",
    "bsecret-mask": "$TBA",
    "bsecret-congasia": "$TBA",
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
