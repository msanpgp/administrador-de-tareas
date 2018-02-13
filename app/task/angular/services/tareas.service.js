var app = angular.module('adminTareasApp.tareas', []);

app.factory('Tareas', ['$http', '$q', function ($http, $q) {

    var self = {

        'tareas': [],
        cargarPagina: function () {
            var d = $q.defer();

            $http.get("http://localhost:3000/views?estado=false")
                .success(function(data){
                    self.tareas = data
                    return d.resolve();
                })
                .error(function(err){
                    console.log(err);
                });

            return d.promise;
        },
        
        guardarTarea: function (tarea) {

            var d = $q.defer();

            $http.post("http://localhost:3000/views", tarea)
                .success(function (data) {
                    self.cargarPagina();
                    return d.resolve();
                })
                .error(function (err) {
                    console.log(err);
                })
            return d.promise;
        },

        finalizarTarea: function (tarea) {

            var d = $q.defer();

            $http.put("http://localhost:3000/views/" + tarea.id, {
                nombre: tarea.nombre,
                descripcion: tarea.descripcion,
                fechalimite: tarea.fechalimite,
                    estado: true,
            })
                .success(function (data) {
                    return d.resolve();
                })
                .error(function (err) {
                    console.log(err);
                })
            return d.promise;
        }
    };

    return self;
}]);