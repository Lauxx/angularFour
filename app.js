angular.module('dirPractice', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './template/home.html'
		}).state('about', {
			url: '/',
			templateUrl: './template/about.html'
		}).state('contact', {
			url: '/',
			templateUrl: './template/contact.html'
		})

		$urlRouterProvider
		.otherwise('/');

	});