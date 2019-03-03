/**
 * @author heewonchoi
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.manage.memManage', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('manage.memManage', {
          url: '/memManage',
          templateUrl: 'app/pages/manage/memManage/memManage.html',
          title: '회원관리',
          sidebarMeta: {
            order: 100,
          },
        });
  }

})();
