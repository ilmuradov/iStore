class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} TMT</td>
                        <td></td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-wrapper">
                <div class="shopping-container">
                    <div class="shopping__close" onclick="shoppingPage.handleClear()">
                        <img src="img/close.png" />
                    </div>
                    <table>
                        ${htmlCatalog}
                        <tr>
                            <td class="shopping-element__name"> Sum: </td>
                            <td class="shopping-element__price">${sumCatalog.toLocaleString()} TMT</td>
                        </tr> 
                    </table>
                </div>
                <div class="overlay"></div>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();