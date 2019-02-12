function myFunction() {
    var str = document.getElementById("pal").value;
    var reversestr = "";

    // Check whether the string is empty or not
    if (str === "") {
        text = "Not a string";
    }
    else {
        reversestr = str.split('').reverse().join('');
        if (reversestr === str)
            text = "String is a palindrome";
        else
            text = "String is not a palindrome";

    }



    document.getElementById("demo").innerHTML = text;

}