(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.product', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('product', {
          url: '/product',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          title: '상품 페이지',
          sidebarMeta: {
            icon: 'ion-settings',
            order: 800
          },
        })
          .state('product.detail', {
            url: '/detail',
            templateUrl: 'app/pages/product/detail/product.detail.html',
            title: '상품 상세 페이지',
            sidebarMeta: {
              order: 0,
            },
          })
          .state('product.list', {
            url: '/layouts',
            templateUrl: 'app/pages/product/list/product.list.html',
            title: '상품 목록 페이지',
            sidebarMeta: {
              order: 100,
            },
          });
    }
  })();