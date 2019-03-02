/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('memChartJs2DCtrl', memChartJs2DCtrl);

  /** @ngInject */
  function memChartJs2DCtrl($scope) {
    $scope.labels =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"];
    $scope.data = [
      [0, 0, 0, 0, 65, 59, 90, 81, 56, 0, 0, 0],
      [0, 0, 0, 0, 28, 48, 40, 19, 88, 0, 0, 0]
    ];
    $scope.series = ['가입한 회원수', '로그인 회원수'];


    $scope.changeData = function () {
      $scope.data[0] = shuffle($scope.data[0]);
      $scope.data[1] = shuffle($scope.data[1]);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
  }

})();