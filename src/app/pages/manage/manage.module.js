/**
 * @author heewonchoi
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.manage', [
      //'BlurAdmin.pages.manage.memManage',
      //'BlurAdmin.pages.manage.goodsManage',
    ])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('manage', {
          url: '/manage',   
          templateUrl: 'app/pages/manage/incHeader.html',
          title: '관리자 페이지',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 2000,
          },
        });
    //  $urlRouterProvider.when('/manage','/manage/incHeader');
    }
    
  })();