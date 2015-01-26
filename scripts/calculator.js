function Add()
{

	$("p").remove();
	if(validate("xInput","yInput")==false)
	{
		var result = parseInt($("#xInput").val()) + parseInt($("#yInput").val());

		var outputRes="X plus Y is "+result;

		$("#res").append('<p align="center"> '+outputRes+'</p>');
	}
	

}


function Substract()
{
    $("p").remove();

    if(validate("xInput","yInput")==false)
    {
    	var result = parseInt($("#xInput").val()) - parseInt($("#yInput").val());

		var outputRes="X minus Y is "+result;

		$("#res").append('<p align="center"> '+outputRes+'</p>')
    }

	

}

function validate(id1,id2)
{
	$("#"+id1).parent().remove("#xError");
    $("#"+id2).parent().remove("#yError");
var hasError=false;
	 if(isNaN(parseInt($("#"+id1).val())) ){
		$("#"+id1).parent().append('<p id="xError" class="error_show"> Please enter a valid number </p>');
		hasError=true;
	 }else{
	 	if(parseInt($("#"+id1).val())<0){
	 		$("#"+id1).parent().append('<p id="xError" class="error_show"> Please enter a positive integer </p>');
	 		hasError=true;
	 	}
	 }
	 if(isNaN(parseInt($("#"+id2).val())) ){
		$("#"+id2).parent().append('<p id="yError" class="error_show"> Please enter a valid number </p>');
		hasError=true;
	 }else{
	 	if(parseInt($("#"+id2).val())<0){
	 		$("#"+id2).parent().append('<p id="yError" class="error_show"> Please enter a positive integer </p>');
	 		hasError=true;
	 	}
	 }

	
	return hasError;
}