'use strict';

angular.module('testApp').factory('PhoneFactory', function(){

});

angular.module('testApp').service('PhoneService', ['PhoneFactory', '$http', function(PhoneFactory, $http){
  return {
    get: function(){
      $http.get('/api/phones')
        .success(function(phones) {
          return phones;
        }).error(function(err) {
          alert(err);
        });
    }
  }
  
}]);