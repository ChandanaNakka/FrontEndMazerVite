import UrlJson from './Url.json' with {type: 'json'};
let StartFunc = async () => {
    let jVarLocalFetchUrl = `${UrlJson.url}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };