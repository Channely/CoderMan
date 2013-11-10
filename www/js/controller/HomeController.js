function HomeController($scope,$navigate){
    make_begin_btn_bigger();
    $scope.start_this_game=function(){
        localStorage.a_fixed_num = random_a_num();
        localStorage.guess_times = 0;
        $scope.display='****';
        $scope.num_input='';
        $scope.alert_message='Notice there,after "compare".';
        make_compare_btn_bigger();
    }

    $scope.guess_it=function(){
        localStorage.guess_times=JSON.stringify(JSON.parse(localStorage.guess_times)+1);
        localStorage.a_guessed_num = $scope.num_input;
        var result = compare_num(localStorage.a_fixed_num,localStorage.a_guessed_num);
        if(result=='4A0B'){
            $scope.display="Clever!It's'"+localStorage.a_fixed_num+"',total'"+localStorage.guess_times+"'times.";
            $scope.alert_message="You are win";
            make_begin_btn_bigger();
        }else{
            $scope.display=result;
            if(localStorage.getItem("guess_times")=='8'){
                $scope.alert_message="Game over."
                make_begin_btn_bigger();
            }else{
                var rest_time = 8-JSON.parse(localStorage.getItem('guess_times'))
                $scope.alert_message="Hey boy, you have "+ rest_time +" times left"
            }
        }

    }

    function make_begin_btn_bigger(){
        $scope.input_status = "disabled"
        $scope.class_start = "btn-primary btn-large"
        $scope.class_compare = "btn-4"
    }
    function make_compare_btn_bigger(){
        $scope.class_start = "btn-4"
        $scope.class_compare = "btn-primary btn-large"
    }


    $scope.to_simple_page = function(){
        $navigate.go("/home_simple")
    }

    $scope.to_home_page = function(){
        $navigate.go("/home","slide","left")
    }

    $scope.to_navigate_page = function(){
        $navigate.go("/navigate_page","slide")
    }
}