/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mgManage')
       .controller('addGoodsCtrl', addGoodsCtrl);
  /** @ngInject */
  function addGoodsCtrl($scope, $state, $location){
    $scope.addGoods = function(page){
      $state.go(page);
    }
  }

    
})();