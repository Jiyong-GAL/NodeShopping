(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.order.orderPayment', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('order.orderPayment', {
          url: '/orderPayment',
          templateUrl: 'app/pages/order/orderPayment.html',
          title: '제휴할인 및 결제',
          sidebarMeta: {
            icon: 'fa fa fa-building-o',
            order: 830
          },
        });
    }
  })();

  