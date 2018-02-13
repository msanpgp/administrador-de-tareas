var app = angular.module('adminTareasApp.tareasFinalizadasCtrl', []);


/*Controlador de views*/
app.controller('tareasFinalizadasCtrl', ['$scope', 'TareasFinalizadas' ,function ($scope, TareasFinalizadas) {

    $scope.activar('mTareasFinalizadas','','Tareas finalizadas','Listado');
    $scope.tareasfinalizadas = {};

    TareasFinalizadas.cargarPagina().then( function () {
        $scope.tareasfinalizadas = TareasFinalizadas.tareasfinalizadas;
    });

}]);