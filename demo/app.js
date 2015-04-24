var app = angular.module('MyApp', ['angularForm']);

app.controller('ExampleController', ['$scope', function($scope) {

  $scope.templates = [
      { name: 'Completo', url: 'templates/complete.html'},
      { name: 'Mensagem de Sucesso', url: 'templates/success.html'},
      { name: 'Mensagem de Erro', url: 'templates/error.html'},
      { name: 'Mensagem de Erro + Campos', url: 'templates/error-message.html'},
      { name: 'Mensagem de Erro + Cores', url: 'templates/error-color.html'},
      { name: 'Redirecionamento', url: 'templates/redirect.html'}
  ];

  $scope.template = $scope.templates[0];

}]);