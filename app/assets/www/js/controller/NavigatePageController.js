function NavigatePageController($scope, $navigate, squareDrawer){

    $scope.maps = ['navigate to China','U9 My favorite subject is science','zhe li shi meiguo','United State','Welcome to My class','zhe li shi meiguo','United State','Welcome to My class','Hello World',"I'm not superman",'javascript in my life','lenovo LG Sumsung']

    $scope.to_home_page = function(){
        $navigate.go("/home","slide","left")
    }

    $scope.$watch(null, function(newValue, oldValue) {
        background_line_init();
    }, true);


//    window.onfocus() = document.getElementById("canvas-block-1").click()
}