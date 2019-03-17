/**
* @author heewonchoi
*/

(function () {
      'use strict';
      
      angular.module('BlurAdmin.pages.mgManage', ['BlurAdmin.pages.mgManage.goodsManage'])
          .config(routeConfig);
  
  /** @ngInject */
  function routeConfig($stateProvider) {
      $stateProvider
      .state('mgManage', {
        url: '/mgManage',
        templateUrl: 'app/pages/mgManage/incHeader.html',
        title: '회원및상품관리',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 2000,
        },
      });
    }
  })();
  