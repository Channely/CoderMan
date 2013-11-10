function NavigatePageController($scope, $navigate){

    $scope.to_home_page = function(){
        $navigate.go("/home","slide","left")
    }

}