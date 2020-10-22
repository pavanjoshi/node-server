var productsData = require("./data-db.json");

exports.validateCart = function(productsArr) {
    console.log(productsArr);
    var error = "";
    productsArr.forEach(product => {
        console.info(product.code);
        if (!productsData.products[product.code].active == true) {
            console.info("Inactive product: " + product.code);
            error = "Inactive product: " + product.code;
        }
        else if (productsData.products[product.code].stock < 1) {
            console.info("Out of stock: " + product.code);
            error = "Out of stock: " + product.code;
        }        
    });
    return error;
}