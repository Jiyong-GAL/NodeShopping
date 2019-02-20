(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.testpage', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('testpage', {
          url: '/testpage',
          templateUrl: 'app/pages/testpage/testpage.html',
          title: '테스트 페이지',
          sidebarMeta: {
            icon: 'ion-settings',
            order: 900
          },
        });
    }
  })();