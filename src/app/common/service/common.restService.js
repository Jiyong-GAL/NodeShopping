/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('common.restService', [])
  .service('restService', restService);

  /** @ngInject */
  function restService($http) {
    return {
    httpSend : function(sendUrl,params){
      console.log("params ====== ", params);
        $http({
          method: 'GET'
          ,url :sendUrl
          // ,data : JSON.stringify(params)
          ,data : params
          ,headers:{'Content-Type':'application/json; charset=utf-8'}
        }).success(function(data, status, headers, config){
          console.log('succcess == ',data);
        }).error(function(error){
          console.log('error == ',error);

        });

      }
    }
  }

})();
