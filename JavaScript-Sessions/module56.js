const pi=3.14;


    let areaofCircle = () => {
        let r=document.getElementById('radius').value;
        let area=pi*r*r;
        document.getElementById("circle_area").innerHTML=area;
    }


    let areaofRectangle = () => {
        let l=document.getElementById('length').value;
        let b=document.getElementById('breadth').value;
        let area=l*b;
        document.getElementById("rectangle_area").innerHTML=area;
}


    let areaofCylinder = () => {
        let r=document.getElementById('radius1').value;
        let h=document.getElementById('height').value;
        let area=pi*r*r*h;
        document.getElementById("cylinder_area").innerHTML=area;
}

let arr=[1,1,2,2,3,3,4,4,24,4,88,44,4,3,2,1];
let uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr);
document.getElementById("uni").innerHTML = "Original Array is [ " +arr+ " ] and Unique Array is [ " +uniqueArr+ " ]";