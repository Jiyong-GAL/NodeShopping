/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mgManage')
       .controller('addGoodsCtrl', addGoodsCtrl);
  /** @ngInject */
  function addGoodsCtrl($scope, $location) {
      $scope.addGoods = function(){
        $location.path('app/pages/mgManage/goodsManage/addGoodsModal1.html');
      }
    }

    
})();