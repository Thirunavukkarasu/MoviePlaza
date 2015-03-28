/**
 * Configure the Routes
 */
 
moviePlazaApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : "partials/home.html", 
        controller  : "MoviePlazaController"
    })
    .when("/movie/:id",{
        templateUrl : "partials/movies.html",
        controller  : "MovieDetailsController"
    })
    .when("/bookings", {
        templateUrl : "partials/bookings.html", 
        controller  : "MoviePlazaBookingsController"
    })
    .when("/bookTickets/:id",{
        templateUrl : "partials/bookTickets.html",
        controller  : "MovieBookTicketsController" 
    })
    .otherwise({
        redirectTo: '/'
    });
}]);