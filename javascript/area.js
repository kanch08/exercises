 function myFunction(){
        var x=document.getElementById("rad").value;
        if(x>0){
            var area=document.getElementById("demo");
           area.innerHTML+="Area of circle :"+(Math.PI*x*x)+"<br>";
        
        }
        
    }