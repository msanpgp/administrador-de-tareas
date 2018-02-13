var app = angular.module('login.loginService', []);

app.factory('LoginService', [ '$http', '$q', function ($http, $q) {

    var self = {

        login : function (datos) {

            var d = $q.defer();
            var mensaje = "";

            $http.get('http://localhost:3000/usuarios')
                .success(function ( data ) {

                    if(datos.usuario == 'test' && datos.contrasena == 'test') {
                        window.location = '/adminTask/app/task/index.html';

                    }
                })

            return d.promise;

        }
    };

    return self;
    
}])