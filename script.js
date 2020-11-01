function greet(){
    var name= prompt("  Hello I am bot!..May I know your name please?", "Name: ");
    if (name!=null) {
      document.getElementById("demo").innerHTML="Hello " + name+ "! How are you today? How can I help you?";
    }
  }
  
  function show_menu(){
    document.getElementById("demo1").innerHTML="1.I will tell you the date and time of your place<br>2.I will tell you the weather of a place.<br>Vijayawada.<br>Bhamavaram.<br>Hyderbad.<br>Sarvepalli."
  }
  
  function display(){
    var choice=prompt("What do you want to know out of the two choices given?");
    if(choice!=null){
      if(choice=="what is the date and time now"){
        var date=new Date();
        document.getElementById('demo2').innerHTML="Date: "+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+"<br>Time: "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
      }
      else if(choice=="what is the weather in Vijayawada"){
        document.getElementById('demo2').innerHTML="The temperature in Vijayawada is 30 degrees and it is cloudy."
      }
      else if(choice=="what is the weather in Bhimavaram"){
        document.getElementById('demo2').innerHTML="The temperature in Bhimavaram is 35 degrees and it is sunny.";
      }
      else if(choice=="what is the weather in Hyderabad"){
        document.getElementById('demo2').innerHTML="The temperature in Hyderabad is 28 degrees and it is raining heavily.";
      }
      else if(choice=="what is the weather in Sarvepalli"){
        document.getElementById('demo2').innerHTML="Enter the correct city name to know weather.";
      }
      else if(choice=="End this chat"){
        document.getElementById("demo2").innerHTML="Thank you.Let's meet again";
      }
    }
    else if(choice==null){
      document.getElementById('demo2').innerHTML="Enter the right choice."
    }
  }
  
  