var angularform = angular.module('angularForm', []);

angularform.controller("FormCtrl",['FormService', function(FormService) {

    var self = this;
    self.form = {};
    self.formError = {};
    self.formMessage = {};
    self.loading = false;

    self.submit = function(action) {
        FormService.submit(action, self);
    };

}]).factory("FormService", ['$http','$window', function($http,$window) {

  return {
    submit: function(action, ctrl) {
      ctrl.loading = true;
      $http({
        method  : 'POST',
        url     : action,
        data    : ctrl.form
       }).success(function(data) {

          if (data.redirect) {
            $window.location.href = data.redirect.url;
          }

          ctrl.formError = data.error;
          ctrl.formMessage.error = data.errorMessage.message;
          ctrl.formMessage.success = data.successMessage.message;
          ctrl.loading = false;

      });
    }
  };

}]);