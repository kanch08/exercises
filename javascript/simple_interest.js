 function simpl()
    {
    var p,r,t;
    p=prompt("Please Enter Principle Amount");
    r=prompt("Please Enter Rate Amount");
    t=prompt("Please Enter Time(year)");
    var si=(p*r*t)/100;
    var text=document.getElementById("textid").innerHTML="Simple Interest (calculated anually) is: "+si;
    }