import angular from 'angular';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';

import '../../node_modules/angular-material/angular-material.min.css';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://google.com';
    this.anchor = 'Touch my troolala, my ding ding dong!';
    let iteration = 0;
    this.doIt = function() {
      console.log("rabotay!");
      this.anchor = "ol lo lo lol ol l o lo lol ol lo " + Math.random();
    };
    console.log("I'm alive!");
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngMaterial'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;