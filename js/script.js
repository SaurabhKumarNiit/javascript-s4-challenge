// Write solution code here to dynamically add the form fields 

// Save the order details on clicking the submit button
var OrderList=[];

function orderCategory($event){
    event.preventDefault();
    let div=document.querySelector("#customerDetails");
    let lable1=document.createElement("label");
    let lableText1=document.createTextNode("Category Name");
    lable1.appendChild(lableText1)
    let input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","input1");
    div.appendChild(lable1)
    div.appendChild(input1);


    
    let lable2=document.createElement("label");
    let lableText2=document.createTextNode("Item Name");
    lable2.appendChild(lableText2)
    let input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","input2");
    div.appendChild(lable2)
    div.appendChild(input2);


    
    let lable3=document.createElement("label");
    let lableText3=document.createTextNode("Price");
    lable3.appendChild(lableText3)
    let input3=document.createElement("input");
    input3.setAttribute("type","number");
    input3.setAttribute("id","input3");
    input3.setAttribute("value",0);
    div.appendChild(lable3);
    div.appendChild(input3);


    let lable4=document.createElement("label");
    let lableText4=document.createTextNode("Quantity");
    lable4.appendChild(lableText4)
    let input4=document.createElement("input");
    input4.setAttribute("type","number");
    input4.setAttribute("id","input4");
    input4.setAttribute("value",0);
    div.appendChild(lable4)
    div.appendChild(input4);


   
    let lable5=document.createElement("label");
    let lableText5=document.createTextNode("Amount");
    lable5.appendChild(lableText5)
    let input5=document.createElement("input");
    input5.setAttribute("type","text");
    input5.setAttribute("id","input5");

    div.appendChild(lable5)
    div.appendChild(input5);



    let input6=document.createElement("button");
    textbtn=document.createTextNode("save");
    input6.appendChild(textbtn);
    input6.addEventListener("click",saveOrder);
    div.appendChild(input6)

}

function saveOrder(){
    
    let order={
        "categoryName":document.getElementById("input1").value,
        "itemName":document.getElementById("input2").value,
        "price":document.getElementById("input3").value,
        "quantity":document.getElementById("input4").value,
        "amount":document.getElementById("input3").value*document.getElementById("input4").value

    }

    OrderList.push(order)
    console.log("Order List Submitted");
    document.getElementById("input5").value=order.amount;
    console.log(OrderList)
    alert(`Total Bill Amount : ${order.amount}`);
    return false;
}

