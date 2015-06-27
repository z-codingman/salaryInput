/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'partials/index.html',
            controller: 'IndexCtrl'
        });

        $routeProvider.when('/login', {

        });

        $routeProvider.when('/', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});
