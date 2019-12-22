function openForm() {
  document.getElementById("myForm").style.display = "block";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function validateBVN(){
	var confirmed  = document.getElementById('confirmboolean').checked

	if (confirmed == true){
		document.getElementById('overlay').style.display = "flex";
		var bvn = document.getElementById("bvnno").value.toString();
		var bvndetails
		console.log(bvn)
		$.getJSON("https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/"+bvn+"?seckey=FLWSECK-ed7c94c9fa6c46de4d7ef56407600df1-X", function(bvndata) {
				if (bvndata.status == "success" && bvndata.message == "BVN-DETAILS"){
					bvndetails = bvndata.data;
					showData(bvndetails);
				}
		});
	} else {
		alert("Please check the box!")
	}

}

function showData(x){
	document.getElementById('loader').style.display = "none";
	document.getElementById('databox').style.display = "block";
	document.getElementById('bvnfname').innerHTML = x.first_name
	document.getElementById('bvnmname').innerHTML = x.middle_name
	document.getElementById('bvnlname').innerHTML = x.last_name
	document.getElementById('overlay').style.display = "block";
}

function closeOver(){
	document.getElementById('overlay').style.display = "none";
}
