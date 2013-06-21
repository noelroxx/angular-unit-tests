'use strict';

angular.module('testApp')
  .controller('PhonesCtrl', ['$scope', 'PhoneService', '$http', function ($scope, PhoneService, $http) {
    $scope.phones = $http.get('/api/phones');
  }]);