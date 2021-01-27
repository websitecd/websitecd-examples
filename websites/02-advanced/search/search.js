function callApi(url) {
    console.log('calling rest api: ' + url);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            document.getElementById("restapi-call-result").innerHTML = this.responseText;
        }

    };
    xhr.onerror = function (err) {
        document.getElementById("restapi-call-result").innerHTML = err;
    }
    xhr.open("GET", url, true);
    xhr.send();
}
