(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.orderConfrim', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('order.orderConfirm', {
          url: '/orderConfrim',
          templateUrl: 'app/pages/order/orderConfirm.html',
          title: '주문 및 배송지 확인',
          sidebarMeta: {
            icon: 'fa fa fa-building-o',
            order: 820
          },
        });
    }
  })();

  