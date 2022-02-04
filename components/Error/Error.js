class Error {
    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3> Rugsat yok </h3>
                    <p> Tazeden synanshyp gorun! </p>
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();