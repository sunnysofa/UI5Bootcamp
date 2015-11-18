sap.ui.controller("ui5bootcamp.editData", {

	onInit: function() {

		//average wattage of common household appliances
		var oData = {
			usageData : [ 
	             {
	            	 'Appliance' : "Ceiling fan",
	            	 'Wattage' : "35"
	             }, {
	            	 'Appliance' : "Clothes dryer",
	            	 'Wattage' : "2790"
	             }, {
	            	 'Appliance' : "Clothes washer",
	            	 'Wattage' : "255"
	             }, {
	            	 'Appliance' : "Coffee maker",
	            	 'Wattage' : "1000"
	             }, {
	            	 'Appliance' : "Computer (desktop PC)",
	            	 'Wattage' : "75"
	             }, {
	            	 'Appliance' : "Computer (notebook PC)",
	            	 'Wattage' : "25"
	             }, {
	            	 'Appliance' : "Dishwasher",
	            	 'Wattage' : "330"
	             }, {
	            	 'Appliance' : "Refrigerator",
	            	 'Wattage' : "225"
	             }, {
	            	 'Appliance' : "Space heater",
	            	 'Wattage' : "1320"
	             }, {
	            	 'Appliance' : "Television",
	            	 'Wattage' : "150"
	             }, {
	            	 'Appliance' : "Vacuum",
	            	 'Wattage' : "542"
	             }, {
	            	 'Appliance' : "Water heater",
	            	 'Wattage' : "4500"
	             } ]

		};

		var demoJSONModel = new sap.ui.model.json.JSONModel();

		demoJSONModel.setData(oData);
		this.getView().byId("iddataTable").setModel(demoJSONModel);
	},

	navBack: function(evt){
		app.back();
	},

	buttonEditData: function(evt){
		var datepick = new sap.m.DatePicker({});
		var datainput = new sap.m.Input({});
		var dialog = new sap.m.Dialog({
			title: "some dialog box", 
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
	},


	navBack: function(evt){
		app.back();
	}

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf ui5bootcamp.editData
	 */
//	onBeforeRendering: function() {

//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf ui5bootcamp.editData
	 */
//	onAfterRendering: function() {

//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf ui5bootcamp.editData
	 */
//	onExit: function() {

//	}

});