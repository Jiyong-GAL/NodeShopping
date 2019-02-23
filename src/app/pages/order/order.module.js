(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.order', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('order', {
          url: '/order',
          templateUrl: 'app/pages/order/order.html',
          title: '주문 페이지',
          sidebarMeta: {
            icon: 'fa fa fa-building-o',
            order: 810
          },
        });
    }
  })();

  