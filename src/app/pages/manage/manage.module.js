(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.manage', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('manage', {
          url: '/manage',
          templateUrl: 'app/pages/manage/manage.html',
          title: '관리자 페이지',
          sidebarMeta: {
            icon: 'ion-settings',
            order: 800
          },
        });
    }
  })();