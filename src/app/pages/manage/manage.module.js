/**
 * @author heewonchoi
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.manage', [
      //'BlurAdmin.pages.manage.memManage',
      //'BlurAdmin.pages.manage.goodsManage',
    ])
    angular.module('BlurAdmin.pages.manage', 
        ['BlurAdmin.pages.manage.managementConsultationQuestions'
        ,'BlurAdmin.pages.manage.orderManagement'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('manage', {
<<<<<<< HEAD
          url: '/manage',   
          templateUrl: 'app/pages/manage/incHeader.html',
=======
          url: '/manage',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          //templateUrl: 'app/pages/manage/manage.html',
          controller: 'ModalsPageCtrl',
>>>>>>> 586cb527069a0a2d3c813d1607b75c12a40f8470
          title: '관리자 페이지',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 2000,
          },
        });
    //  $urlRouterProvider.when('/manage','/manage/incHeader');
    }
<<<<<<< HEAD
    
=======
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
>>>>>>> 586cb527069a0a2d3c813d1607b75c12a40f8470
  })();