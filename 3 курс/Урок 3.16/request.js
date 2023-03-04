const noop = () => { };
const NO_PARAMS = {};
const NO_HEADERS = {};
function request({
    method = 'GET',
    url,
    params = NO_PARAMS,
    headers = NO_HEADERS,
    body,
    type = 'json',
    responseType = 'json',
    requestType = 'json',
    checkStatusInResponse = false,
    onSuccess = noop,
    onError = noop
}) {
    const req = new XMLHttpRequest();
    const urlParams = new URLSearchParams(params);
    const queryString = urlParams.toString();
    req.open(method, url + (queryString ? `?${queryString}` : ''));
    Object.keys(headers).forEach((key) => {
        req.setRequestHeader(key, headers[key]);
    });

    req.responseType = type;
    req.responseType = responseType;

    req.onload = function (event) {
        const target = event.target;
        if (target.status !== 200) {
            onError(target.statusText);
            return;
        }
        if (checkStatusInResponse && target.response.status !== 'ok') {
            onError(target.statusText);
            return;
        }
        onSuccess(target.response);
    }
    req.onerror = function () {
        onError();
    }

    req.send(body);
    let dataBody = body;

    if (requestType === 'urlencoded') {
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        const bodyParams = new URLSearchParams({
            key: API_KEY,
            lang: 'ru-ru',
            text: input.value
        });

        dataBody = bodyParams.toString();
    }

    req.send(dataBody);
}