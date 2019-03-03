/**
* @author heewonchoi
*/

(function () {
      'use strict';
      
      angular.module('BlurAdmin.pages.mgManage', [])
          .config(routeConfig);
  
  /** @ngInject */
  function routeConfig($stateProvider) {
      $stateProvider
      .state('mgManage', {
        url: '/mgManage',
        templateUrl: 'app/pages/mgManage/incHeader.html',
        title: '관리자페이지2',
        controller: 'ModalsPageCtrl',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 2000,
        },
      });
    }
  })();
  