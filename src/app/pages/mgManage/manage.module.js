/**
* @author heewonchoi
*/
(function () {
  'use strict';
  angular.module('BlurAdmin.pages.mgManage', [
  //'BlurAdmin.pages.mgManage.memManage',
  //'BlurAdmin.pages.mgManage.goodsManage',
  ]).config(routeConfig);
  
  /** @ngInject */
  function routeConfig($stateProvider) {
  $stateProvider
  .state('mgManage', {
  url: '/mgManage',
  templateUrl: 'app/pages/mgManage/incHeader.html',
  title: '관리자페이지2',
  sidebarMeta: {
  icon: 'ion-gear-a',
  order: 2000,
  },
  });
  }
  })();
  