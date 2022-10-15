function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
$(document).ready(function(){
    $(".img ").hover(function(){
        $(this).width(1.25*$(this).width());
        $(this).height(1.25*$(this).height());
    },function(){
        $(this).width(0.8*$(this).width());
        $(this).height(0.8*$(this).height());
    });
});

document.getElementById("btn").addEventListener("click", function () {
    var emailInput =document.getElementsByName("email").values;
    var nameInput =document.getElementsByName("name").values;
    
    if(emailInput === "" && nameInput === ""){
        console.log(" please fill the form !!")
    }
    else{
        alert("Thank you for reaching out!");
    }
    
});

