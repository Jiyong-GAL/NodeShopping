(function () {
  'use strict';

  angular.module('BlurAdmin.pages.manage', 
      ['BlurAdmin.pages.manage.managementConsultationQuestions'
      ,'BlurAdmin.pages.manage.orderManagement'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
      $stateProvider
      .state('manage', {
        url: '/manage',
        template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        //templateUrl: 'app/pages/manage/manage.html',
        controller: 'ModalsPageCtrl',
        title: '관리자 페이지',
        sidebarMeta: {
          icon: 'ion-settings',
          order: 800
        },
      });
  }
})();



(function () {
  'use strict';

  angular.module('BlurAdmin.pages.order', 
    ['BlurAdmin.pages.order.orderConfrim'
    ,'BlurAdmin.pages.order.orderPayment']
  ).config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
      $stateProvider
      .state('order', {
        url: '/order',
        abstract: true,
        template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        // templateUrl: 'app/pages/order/order.html',
        title: '주문 페이지',
        sidebarMeta: {
          icon: 'fa fa fa-building-o',
          order: 810
        },
      });
  }
})();