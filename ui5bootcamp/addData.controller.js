sap.ui.controller("ui5bootcamp.addData", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5bootcamp.addData
*/
	onInit: function() {
		
		//usageData
		var oData = {

	            usageData : [ {
	                'DATE' : "November 1",
	                'USAGE' : "110"
	            }, {
	            	'DATE' : "November 2",
	                'USAGE' : "115"
	            }, {
	                'DATE' : "November 3",
	                'USAGE' : "225"
	            }, {
	                'DATE' : "November 4",
	                'USAGE' : "250"
	            }, {
	                'DATE' : "November 5",
	                'USAGE' : "200"
	            }, {
	                'DATE' : "November 6",
	                'USAGE' : "180"
	            } ]

	        };

		//set model to view
        var demoJSONModel = new sap.ui.model.json.JSONModel();
        demoJSONModel.setData(oData);
        this.getView().byId("iddataTable").setModel(demoJSONModel);
	},
	
	navBack: function(evt){
		app.back();
	},
	
	buttonAddData: function(evt){
		var datepick = new sap.m.DatePicker({date: "20151113"});
		var datainput = new sap.m.Input({placeholder: "usage (kWh)"});
		var dialog = new sap.m.Dialog({
			title: "Add Usage Data", 
			beginButton: new sap.m.Button({
				text:"Save",
				press: function(){
					dialog.close();
				}
			}),
			endButton: new sap.m.Button({
				text:"Cancel",
				press: function(){
					dialog.close();
				}
			}),
			afterClose: function(){
				dialog.destroy();
			}
		});
		dialog.addContent(datepick).addContent(datainput);
		this.getView().addDependent(dialog);
		dialog.open();
	}

});