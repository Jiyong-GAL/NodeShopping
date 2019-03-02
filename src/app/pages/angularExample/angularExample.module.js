(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.angularExample', []
    ).config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('angularExample', {
          url: '/angularExample',
          templateUrl: 'app/pages/angularExample/angularExample.html',
          title: 'angularExample',
          sidebarMeta: { 
            icon: 'fa fa fa-bug',
            order: 2000
          },
        });
    }
  })();

  