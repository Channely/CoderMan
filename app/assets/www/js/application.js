var myModule = angular.module('myApp', ['mobile-navigate']);

myModule.run(function($route, $http, $templateCache) {
    angular.forEach($route.routes, function(r) {
        if (r.templateUrl) {
            $http.get(r.templateUrl, {cache: $templateCache});
        }
    });
});

myModule.controller('MainCtrl', function($scope, $navigate) {
    $scope.$navigate = $navigate;
});

myModule.directive('ngTap', function() {
    var isTouchDevice = !!("ontouchstart" in window);
    return function(scope, elm, attrs) {
        if (isTouchDevice) {
            var tapping = false;
            elm.bind('touchstart', function() { tapping = true; });
            elm.bind('touchmove', function() { tapping = false; });
            elm.bind('touchend', function() {
                tapping && scope.$apply(attrs.ngTap);
            });
        } else {
            elm.bind('click', function() {
                scope.$apply(attrs.ngTap);
            });
        }
    };
});


myModule.factory('squareDrawer', function() {
//    var registry = {};
//
//    var squareDrawer = {
//        /**
//         * draw the square on the canvas
//         */
//        draw: function(height, width) {
//            console.log("square to draw: " + height + "x" + width);
//
//            var canvas = document.getElementById("canvas");
//            if (canvas.getContext) {
//                console.log("drawing");
//                var ctx = canvas.getContext("2d");
//                //clear the canvas
//                ctx.clearRect(0,0, canvas.width, canvas.height);
//
//                ctx.fillRect(0, 0, width, height);
//
//            }
//        }
//    };
//
//
//    return squareDrawer;
});



var native_access;
$(document).ready(function () {


    native_access = new NativeAccess();



});


