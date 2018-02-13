var app = angular.module('loginApp', ['login.loginService']);


app.controller('mainCtrl', [ '$scope', 'LoginService',function ($scope, LoginService) {

    $scope.invalido = false;
    $scope.cargando = false;
    $scope.mensaje = "";

    $scope.datos = {};

    $scope.ingresar = function (datos) {

        if( datos.usuario != 'test'){
            $scope.invalido = true;
            $scope.mensaje = "Ingrese un usuario Valido";
            return;
        }else if (datos.contrasena != 'test'){
            $scope.invalido = true;
            $scope.mensaje = "Contraseña no es correcta";
            return;
        }

        $scope.invalido = false;
        $scope.cargando = true;

        LoginService.login(datos).then( function (data) {

        });
    }

}]);
