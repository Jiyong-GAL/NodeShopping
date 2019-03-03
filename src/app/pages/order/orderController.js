/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.order')
    .controller('orderController', orderController);

  /** @ngInject */
  function orderController($scope, $uibModal, baProgressModal) {
    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
    $scope.openPop = function(){
      window.open('about:blank','팝업','width=800, height=600');
    }
    $scope.openProgressDialog = baProgressModal.open;
  }


})();
