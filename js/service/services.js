moviePlazaApp.factory('moviePlazaFactory', function ($resource) {
	return $resource('serverside/movies.json');
});
moviePlazaApp.factory('moviePlazaBookingsFactory', function ($resource) {
	return $resource('serverside/bookings.json');
});