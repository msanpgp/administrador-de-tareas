var app = angular.module('adminTareasApp.tareasFinalizadas', []);

app.factory('TareasFinalizadas', ['$http', '$q', function ($http, $q) {

    var self = {

        'tareasfinalizadas': [],
        cargarPagina: function () {
            var d = $q.defer();

            $http.get("http://localhost:3000/views?estado=true")
                .success(function(data){
                    self.tareasfinalizadas = data
                    return d.resolve();
                })
                .error(function(err){

                });

            return d.promise;
        }

    };

    return self;
}]);