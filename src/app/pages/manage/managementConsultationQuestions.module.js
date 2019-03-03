(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.manage.managementConsultationQuestions', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('manage.managementConsultationQuestions', {
          url: '/managementConsultationQuestions',
          templateUrl: 'app/pages/manage/managementConsultationQuestions.html',
          controller: 'TablesPageCtrl',
          title: '상담문의관리',
          sidebarMeta: {
            icon: 'fa fa fa-building-o',
            order: 820
          },
        });
    }
  })();
