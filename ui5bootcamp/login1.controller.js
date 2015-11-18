sap.ui.controller("ui5bootcamp.login1", {
	
	onSubmit: function(oUserID, oPass){
		//alert(oUserID + " " + oPass);
		
		//validate. if correct, move to another function here; if not, ask to reenter
		//will test "other function" here now
		//alert("inside onSubmit");
		
		app.to(homePage);
	}

});