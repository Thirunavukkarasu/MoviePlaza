/**
 * Controls all other Pages
 */
moviePlazaApp.controller('MoviePlazaController', function ($scope,moviePlazaFactory,$location, $http ) {
	$scope.movies = moviePlazaFactory.query();
	$scope.currMovie = null;

	$scope.getMovieById = function (id) {
        var movies = $scope.movies;
        for (var i = 0; i < movies.length; i++) {
            var movie = $scope.movies[i];
            if (movie.id == id) {
                $scope.currMovie = movie;
            }
        }
    }	

   $scope.back = function () {
        window.history.back();
    };

    $scope.getCount = function (n) {
        return new Array(n);
    }

	$scope.isActivePath = function (route) {
        return ($location.path()).indexOf(route) >= 0;
    }

	$scope.isActive = function (route) {
        return route === $location.path();
    }  
});

moviePlazaApp.controller('MovieDetailsController',function($scope,$routeParams,$location,$http){
	 $scope.getMovieById($routeParams.id);
});

moviePlazaApp.controller("MoviePlazaBookingsController", function ($scope, moviePlazaBookingsFactory) {
    $scope.bookings = moviePlazaBookingsFactory.query();
});

moviePlazaApp.controller('MovieBookTicketsController', function($scope,$routeParams,$location,$http){
	$scope.getMovieById($routeParams.id);
	$scope.onlyNumbers = /^\d+$/;
	$scope.formData = {};
    $scope.formData.movie_id = $scope.currMovie.id;
    $scope.formData.movie_name = $scope.currMovie.name;
    $scope.formData.date = "Today";	
	$scope.processForm = function () {
        console.log($scope.formData);
        $http({
            method: 'POST',
            url: 'http://moviestub.cloudno.de/book',
            data: $.param($scope.formData), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                $location.path("/bookings");
            });
    };    
});