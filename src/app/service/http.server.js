var Axios = require("axios");
var Promise = require("./promise.server");

module.exports = {
    get: function(url, data){
        // data是对象
        let options = {params: data} || {params: {}};
        return new Promise(function(resolve, reject){
            Axios.get(url, options).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    },

    post: function(url, data){
        // data对象，axios api
        let options = data || {};
        return new Promise(function(resolve, reject){
            Axios.get(url, options).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    }
}
