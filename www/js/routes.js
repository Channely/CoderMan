myModule.config(function($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "pages/home.html",
        controller: HomeController
        }).when("/home", {
            templateUrl: "pages/home.html",
            controller: HomeController
        }).when("/home_simple", {
            templateUrl: "pages/home_simple.html",
            controller: HomeController
        }).when("/index", {
            templateUrl: "pages/index.html",
            controller: IndexController
    }).otherwise({
            redirectTo:"/"
        });



    //routing generate
    //routing generated over
});

/** Here is example
myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/activity_list_page.html",
        controller: ActivityListController
    }).when("/activity/create", {
            templateUrl: "pages/activity_create_page.html",
            controller: ActivityCreateController
        }).when("/sign_ups/list/:activity_name", {
            templateUrl: "pages/apply_page.html",
            controller: SignUpListController
        }).otherwise({
            redirectTo: "/"
        });
});
**/