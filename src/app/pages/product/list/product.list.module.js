(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.product.list', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('product.list', {
          url: '/list',
          templateUrl: 'app/pages/product/list/product.list.html',
          title: '상품 상세 페이지',
          sidebarMeta: {
            icon: 'fa fa fa-building-o',
            order: 820
          },
        });
    }
  })();

  