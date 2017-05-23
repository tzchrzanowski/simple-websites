(function(window){

    function myLibrary(){

        //execute code here
        var catalog = createRandomCatalog(100);

        return {
            searchProductById: searchProductById,
            searchProductsByPrice: searchProductsByPrice,
            searchProductsByType: searchProductsByType,
            searchAllProducts: searchAllProducts
        }

        //function definitions go here
        // to make object
        function createRandomProduct(){
            var typeArray = ['Electronics','Book','Clothing','Food'];
            var price = (Math.random()*500).toFixed(2) 
            var type = typeArray[Math.floor(Math.random()*4)];
            var valid = Math.random() > .5 ? true : false;
            return {price:price, type:type};                
        }
        // to make catalog
        function createRandomCatalog(num){
            var catalog = [];
            for (var i = 0; i < num; i++){
                var obj = createRandomProduct();
                catalog.push({id:i,price:obj.price,type:obj.type});
            }
            return catalog;
        }
        // to browse all products:
        function searchAllProducts(){
            var promise = new Promise(function(resolve, reject) {

                setTimeout(function(){
                    resolve(catalog);
                },1000);

            });
            return promise;
        }
        // to find object by specific id number:
        function searchProductById(id){

            var promise = new Promise(function(resolve,reject){
                var i = 0;
                setTimeout(function(){
                    while (i < catalog.length){
                        if (catalog[i].id == id){                        
                            resolve({id:id,price:catalog[i].price,type:catalog[i].type});
                        }
                        i++;
                    }
                    reject("Invalid ID: " + id);
                },1000);
            });
            return promise;
        }
        // to find object by type:
        function searchProductsByType(type){

            var promise = new Promise(function(resolve,reject){
                var i = 0;
                var typeArray = [];
                var possibleTypes = ['Electronics','Book','Clothing','Food'];
                if(!possibleTypes.includes(type)){
                    reject("Invalid Type: " + type)
                }
                else{
                    setTimeout(function(){
                        while (i < catalog.length){
                            if (catalog[i].type == type){
                                typeArray.push({id:catalog[i].id,price:catalog[i].price,type:catalog[i].type});
                            }
                            i++;
                        }
                        resolve(typeArray);
                    },1000);
                }
            });
            return promise;
        }
        // find products by given price range:
        function searchProductsByPrice(price,difference){
            var promise = new Promise(function(resolve,reject){
                var i = 0;
                var priceArray = [];
                if(!isFinite(price)){
                    reject("Invalid Price: " + price)
                }
                else{
                    setTimeout(function(){
                        while (i < catalog.length){
                            if (Math.abs(catalog[i].price - price) < difference){
                                priceArray.push({id:catalog[i].id,price:catalog[i].price,type:catalog[i].type});
                            }
                            i++;
                        }
                        resolve(priceArray);
                    },1000);
                }
            });
            return promise;
        }
    // end of myLibrary()
    }

    // myLibrary functions are assigned to api-global variable, 
    // now they can be accessed through the api.function if libary.js is included.
    if(typeof(window.api) === 'undefined'){
        window.api = myLibrary();
    }

})(window); 