var products = {
    "amado-s-garcinia": "$TBA",
    "amado-fiber": "$TBA",
    "amado-tea": "$TBA",
    "amado-shireru": "$TBA",
    "bsecret-cream": "$TBA",
    "bsecret-mask": "$TBA",
    "bsecret-congasia": "$TBA"
};


$(document).ready(function(){

    $.each(products, function(i, val) {
        $("#prod-" + i).append(val);
    });

});
