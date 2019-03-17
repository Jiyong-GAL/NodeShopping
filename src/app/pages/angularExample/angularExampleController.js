(function () {
    'use strict';

    angular.module('BlurAdmin.pages.angularExample')
      .controller('angularExampleController', angularExampleController);
      
      /** @ngInject */
    function angularExampleController($scope, restService) {
        $scope.data = {
          name : '홍길동'
         ,age : 20
         ,fruitList : ['사과','배','바나나','포도']
         ,booleanTrue : true
         ,booleanFalse : false
        };

        $scope.event ={
          inputChange : change
          , test : test
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

        function test(){
          var params = {
            data:{
              name : '혜웅'
              ,job : false
            }
          };
          restService.httpSend('404',params);
        }
    }

  })();
  