
              function prohibitpreviouspage(){

                if(navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6 ){

                //Firefox
                setTimeout("fn_forward()",1);
                window.history.go(1);
                }else{ //IE.Chrome.Edge
                window.history.forward();
                }
                }
              function fn_forward() {
                history.forward();
                setTimeout("fn_forward()",1);
                }
              function MS(){
                return window.location.assign("https://itingt.github.io/test1/school_info_g")
                }
              function N(){
                return window.location.assign("https://itingt.github.io/test1/end_page")
                }

