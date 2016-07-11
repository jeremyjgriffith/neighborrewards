angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.checkIn', {
    url: '/checkin',
    views: {
      'side-menu21': {
        templateUrl: 'templates/checkIn.html',
        controller: 'checkInCtrl'
      }
    }
  })

  .state('menu.myNeighborhoods', {
    url: '/myneighborhoods',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myNeighborhoods.html',
        controller: 'myNeighborhoodsCtrl'
      }
    }
  })

  .state('menu.rewards', {
    url: '/rewards',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rewards.html',
        controller: 'rewardsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.offers', {
    url: '/offers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/offers.html',
        controller: 'offersCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.neighborhoodSearch', {
    url: '/neighborhoodSearch',
    views: {
      'side-menu21': {
        templateUrl: 'templates/neighborhoodSearch.html',
        controller: 'neighborhoodSearchCtrl'
      }
    }
  })

  .state('menu.locationDetails', {
    url: '/locationDetails',
    views: {
      'side-menu21': {
        templateUrl: 'templates/locationDetails.html',
        controller: 'locationDetailsCtrl'
      }
    }
  })
  
  .state('menu.neighborhoodResults', {
    url: '/neighborhoodResults',
    views: {
      'side-menu21': {
        templateUrl: 'templates/neighborhoodResults.html',
        controller: 'neighborhoodResultsCtrl'
      }
    }
  })
$urlRouterProvider.otherwise('/side-menu21/checkin')

  

});