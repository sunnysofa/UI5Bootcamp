sap.ui.controller("ui5bootcamp.homePage", {

	//onInit: function() {
	//	
	//},
	
	pressAddData: function(evt){
		app.to("idaddData");
	},
	
	pressViewData: function(evt){
		app.to("idviewData");
	},
	
	//editData view changed purposes, but the view/controller were already created and
	//partially developed so the misleading name stuck
	//should be viewAdditionalInfo, or something of that nature
	pressInfo: function(evt){
		app.to("ideditData");
	}, 
	
	navBack: function(evt){
		app.back();
	}

});