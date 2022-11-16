function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}

function validatephone(phone) 
{
    var maintainplus = '';
    var numval = phone.value
    if ( numval.charAt(0)=='+' )
    {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}

function email_validate(email)
{
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
    document.getElementById("status").innerHTML    = "<small style='color:red;'>Email address is not valid yet.</small>";
    }
    else
    {
    document.getElementById("status").innerHTML	= "<small style='color:green;'>Thanks, you have entered a valid Email id!</small>";	
    }
}

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  });
  
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items:10,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      nav : true,
      lazyload : true,
      margin : 5,
      padding : 5,
      stagePadding : 5,
      responsive : {
        0 : {
            items : 2,
            dots : false
        },
        485 : {
            items : 3,
            dots : false
        },
        728 : {
            items : 4,
            dots : false
        },
        960 : {
            items : 5,
            dots : false
        },
        1200 : {
            items : 5,
            dots : false
        }
      }
    });
         });

                 var date=new Date(); 
                 var day=date.getDate(); 
                 var month=date.getMonth()+1; 
                 var year=date.getFullYear(); 
    
                 document.getElementById('txt').innerHTML = day+"/"+month+"/"+year;

                 function showTime()
                 {
                     console.log("showTime()...");
                     var date = new Date();
                     console.log(date);
 
                     var h = date.getHours(); // 0 - 23
                     var m = date.getMinutes(); // 0 - 59
                     var s = date.getSeconds(); // 0 - 59
                     var session = "AM";
                     
                     if(h == 0){
                         h = 12;
                     }
                     
                     if(h > 12){
                         h = h - 12;
                         session = "PM";
                     }
                     
                     h = (h < 10) ? "0" + h : h;
                     m = (m < 10) ? "0" + m : m;
                     s = (s < 10) ? "0" + s : s;
                     
                     var time = h + ":" + m + ":" + s + " " + session;
                     document.getElementById("MyClockDisplay").innerText = time;
                     setTimeout(showTime, 1000);
                 }
             showTime();   


             function myFunction() {
                alert("The form was submitted");
                // document.write("<small style='color:green; position:top;'>Thanks, you have done!</small>")
                // document.getElementsByClassName("alert").innerHTML;
              }
            // function submit(submit){

            //     if(test(submit) == false)
            //     {
            //     document.getElementsByClassName("alert").innerHTML    = "<small style='color:red;'>Submition is not valid yet.</small>";
            //     }
            //     else
            //     {
            //     document.getElementsByClassName("alert").innerHTML	= "<small style='color:green;'>Thanks, you have done!</small>";	
            //     }

            // }

            // function show_alert() {
            //     alert("xxxxxx");
            //   }