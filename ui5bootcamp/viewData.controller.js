sap.ui.controller("ui5bootcamp.viewData", {
	
	onInit: function() {
			
		var oVizFrame = this.getView().byId("idoVizFrame");

		//data points for total electricity usage 
		var oModel_bl = new sap.ui.model.json.JSONModel({
		      "usageDataPoints":[
	               {
	            	   "Date": "Nov 1",
	            	   "Profit": 100,
	            	   "Target": 20,
	            	   "Usage": 110
	               },
	               {
	                   "Date": "Nov 2",
	                   "Profit": 159,
	                   "Target": 150,
	                   "Usage": 225
	               },
	               {
	                   "Date": "Nov 3",
	                   "Profit": 129,
	                   "Target": 100,
	                   "Usage": 450
	               },
	               {
	                   "Date": "Nov 4",
	                   "Profit": 58,
	                   "Target": 80,
	                   "Usage": 600
	               },
	               {
	                   "Date": "Nov 5",
	                   "Profit": 149,
	                   "Target": 150,
	                   "Usage": 800
	               },
	               {
	                   "Date": "Nov 6",
	                   "Profit": 49,
	                   "Target": 55,
	                   "Usage": 950
	               }]
		});
		
		//create flattenedDataset 
	    var oDataset_bl = new sap.viz.ui5.data.FlattenedDataset({
	    	dimensions: [{
	    		name: 'Date',
	    		value: "{Date}"
	    	}],
	    	measures: [{
	    		group:1,
	    		name : "Usage (kWh)",
	    		value : "{Usage}"
	        }],
	        data: {
	        	path: "/usageDataPoints"
	        }
	    });
	  	
	    oVizFrame.setVizProperties({  
	    	plotArea: {
	    		showGap: true
		    }, 
		    legend: {
	            visible: false
		    }, 
		    title : {
	            visible : true, 
	            text : 'Current Total Electricity Usage' 
	        }			  
	    });
		
		oVizFrame.setWidth("600px");
		oVizFrame.setDataset(oDataset_bl);
		oVizFrame.setModel(oModel_bl);

	    var feedPrimaryValues_bl7 = new sap.viz.ui5.controls.common.feeds.FeedItem({
	    	'uid' : "primaryValues",
	    	'type' : "Measure",
	    	'values' : ["Usage (kWh)"]
	    }), feedAxisLabels_bl7 = new sap.viz.ui5.controls.common.feeds.FeedItem({
	      'uid' : "axisLabels",
	      'type' : "Dimension",
	      'values' : ["Date"]
	    });

	    oVizFrame.addFeed(feedPrimaryValues_bl7);
	    oVizFrame.addFeed(feedAxisLabels_bl7);
	    oVizFrame.setVizType('line');
	    //oVizFrame.setUiConfig({'applicationSet': 'fiori'});

	}, 
	
	navBack: function(evt){
		app.back();
	}

});