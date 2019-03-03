(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.manage.orderManagement', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('manage.orderManagement', {
          url: '/orderManagement',
          templateUrl: 'app/pages/manage/orderManagement.html',
          title: '주문관리',
          sidebarMeta: {
            icon: 'fa fa fa-building-o',
            order: 810
          },
        });
    }
  })();
