function render() {
    const productsStore = localStorageUtil.getProducts();
    
    headerPage.render(productsStore.length);
    productsPage.render();

}
spinnerPage.render();

let CATALOG = [];

//http://myjson.dit.upm.es/api/bins/7aiv

fetch('/server/catalog.json')
.then(res => res.json())
.then(body => {
    CATALOG = body;
    setTimeout(function() {
        spinnerPage.handleClear();
        render();
    }, 1000);
})

.catch(error => {
    spinnerPage.handleClear();
    errorPage.render();
});