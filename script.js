/* Applying the "open" class when you click the Menu button, which triggers the mobile menu to open/close; Toggle Menu/Close menu text. */
$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Close Menu' ? 'Menu' : 'Close Menu');
    e.preventDefault();
  });
});
var myIndex = 0;
carousel();



function validateform(){  
var Firstname=document.myform.Firstname.value;
var Lastname=document.myform.Lastname.value;  
var Suggestion=document.myform.Suggestion.value; 
var Tel=document.myform.Tel.value;  
  
if (Firstname==null || Firstname==""){  
  alert("First Name can't be blank");  
  return false;  
}

if (Lastname==null || Lastname==""){  
  alert("Last Name can't be blank");  
  return false;  
}

 if (Suggestion==null || Suggestion==""){  
  alert("Suggestion can't be blank");  
  return false;  
}
else if (isNaN(Tel)){
 alert("Please enter the number in Tel")
  return false;
}
if (Tel==null || Tel==""){  
  alert("Tel can't be blank");  
  return false;  
}
}  
