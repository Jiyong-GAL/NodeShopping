/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mgManage.goodsManage')
       .controller('addGoodsCtrl', addGoodsCtrl)
       .controller('editGoodsCtrl', editGoodsCtrl);
  /** @ngInject */
  function addGoodsCtrl($scope, $state, $location){
    $scope.addGoods = function(page){
      $state.go(page);
    }
  }

  function editGoodsCtrl($scope, $state, $location){
    $scope.editGoods = function(page){
      $state.go(page);
    }
  }

    
})();