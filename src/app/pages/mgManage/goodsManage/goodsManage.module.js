/**
 * @author heewonchoi
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.manage.goodsManage', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('manage.goodsManage', {
          url: '/goodsManage',
          templateUrl: 'app/pages/manage/goodsManage/goodsManage.html',
          title: '상품관리',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
