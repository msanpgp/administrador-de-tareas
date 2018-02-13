var app = angular.module('adminTareasApp.tareasCtrl', ['adminTareasApp.tareas']);

/*Controlador de views*/
app.controller('tareasCtrl', ['$scope', '$http', 'Tareas' ,function ($scope, $http, Tareas) {

    $scope.activar('mTareas','','Tareas pendientes','Listado');
    $scope.tareas = {};
    $scope.tareasNew = {};

    // Cargar el listado de views
    Tareas.cargarPagina().then( function () {
        $scope.tareas = Tareas.tareas;
    });

    // Cambiar el estado de una tarea
    $scope.endTask = function (tarea){

        if(confirm('Desea Finalizar la tarea')){
            Tareas.finalizarTarea(tarea).then(function (value) {
                Tareas.cargarPagina().then(function () {
                    $scope.tareas = Tareas.tareas;
                })
            })
        }
    }

    $scope.guardar = function (tarea) {

        tarea.estado = false;

        Tareas.guardarTarea(tarea).then(function (value) {
            alert('Tarea guardada con exito');
        })
    }

}]);