(function () {
    'use strict';

    angular.module('BlurAdmin.pages.angularExample')
      .controller('angularExampleController', angularExampleController);
      
      /** @ngInject */
    function angularExampleController($scope) {
        $scope.data = {
          name : '홍길동'
         ,age : 20
         ,fruitList : ['사과','배','바나나','포도']
         ,booleanTrue : true
         ,booleanFalse : false
        };

        $scope.event ={
          inputChange : change
          , init : init()
        };
        
        function change(){
          console.log('name >> ',$scope.data.name,'\nage >> ',$scope.data.age);
        }

        function init(){
          var fruits = $scope.data.fruitList;
          for(var i in fruits){
            console.log('과일 >',fruits[i]+'\n');
          }
        }
    }

  })();
  