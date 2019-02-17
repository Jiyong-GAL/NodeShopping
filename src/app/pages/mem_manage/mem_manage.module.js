(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.mem_manage', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('mem_manage', {
          url: '/mem_manage',
          templateUrl: 'app/pages/mem_manage/mem_manage.html',
          title: '관리자 회원 리스트',
          sidebarMeta: {
            order: 900
          },
        });
    }
  })();


  