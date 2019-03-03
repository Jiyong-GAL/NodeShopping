(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.product.detail', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('product.detail', {
          url: '/detail',
          templateUrl: 'app/pages/product/detail/product.detail.html',
          title: '주문 및 배송지 확인',
          sidebarMeta: {
            icon: 'fa fa fa-building-o',
            order: 820
          },
        });
    }
  })();

  