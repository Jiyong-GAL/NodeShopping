/**
 * @author heewonchoi
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mgManage.goodsManage', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('pages.mgManage.goodsManage', {
          url: '/goodsManage',
          templateUrl: 'app/pages/mgManage/goodsManage/goodsManage.html',
          title: '상품관리',
        })
        .state('addGoods', {
          url: '/addGoods',
          templateUrl: 'app/pages/mgManage/goodsManage/addGoods.html',
          title: '상품등록',
        })
        .state('editGoods', {
          url: '/editGoods',
          templateUrl: 'app/pages/mgManage/goodsManage/editGoods.html',
          title: '상품수정',
        })
  }

})();
