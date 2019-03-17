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
        .state('pages.goodsManage', {
          url: '/goodsManage',
          templateUrl: 'app/pages/manage/goodsManage/goodsManage.html',
          title: '상품관리',
        })
        .state('pages.addGoodsManage', {
          url: '/addGoodsManage',
          templateUrl: 'app/pages/manage/goodsManage/addGoods.html',
          title: '상품등록',
        })
  }



})();
