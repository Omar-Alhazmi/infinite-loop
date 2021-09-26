let apiURL;
const expressPort = 5000;
const apiUrls = {
    development: `http://localhost:${expressPort}/`,
    production: `https://infinite-loop-a.herokuapp.com/`,
};
window.location.hostname === 'localhost' ?
    apiURL = apiUrls.development : apiURL = apiUrls.production;

export default apiURL; 