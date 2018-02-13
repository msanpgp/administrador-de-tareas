var app = angular.module('adminTareasApp', [
    'ngRoute',
    'adminTareasApp.configuracion',
    'adminTareasApp.tareas',
    'adminTareasApp.tareasCtrl',
    'adminTareasApp.tareasFinalizadas',
    'adminTareasApp.tareasFinalizadasCtrl',
]);


app.controller('mainCtrl', [ '$scope', 'Configuracion', function ($scope, Configuracion ) {

    $scope.config = {};

    $scope.titulo = "";
    $scope.subtitulo = "";

    $scope.usuario = {
        nombre: "Miguel Sanchez"
    }

    console.log('llega')

    Configuracion.cargar().then( function(){
        $scope.config = Configuracion.config
    });

    /*Functiones del scope*/
    $scope.activar = function ( menu, submenu, titulo, subtitulo ) {

        $scope.titulo = titulo;
        $scope.subtitulo = subtitulo;

        $scope.mTareas = "";
        $scope.mTareasFinalizadas = "";
        $scope.mNuevaTarea = "";
        $scope[menu] = 'active';
    }

}]);


// Enrutador
app.config([ '$routeProvider', function ($routeProvider) {

    $routeProvider

        .when('/nueva', {
            templateUrl: 'views/nueva-tarea.html',
            controller: 'tareasCtrl'
        })
        .when('/views', {
            templateUrl: 'views/tareas.html',
            controller: 'tareasCtrl'
        })
        .when('/tareasFinalizadas', {
            templateUrl: 'views/tareas-finalizadas.html',
            controller: 'tareasFinalizadasCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })

}]);