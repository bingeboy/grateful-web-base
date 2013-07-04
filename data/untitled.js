/*
 * @Description: Uses the mappingObj and gets coords to display the markers on the map.
 */
var googleProcessedMarkerArray;


showMarkers: function (markers) {
		
	for (var i in markers){
		
			marker = new google.maps.Marker({  
				map: XXXXXXXXXXXX,
				position: XXXXXXXXXXXX,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				},
				zoomControl: false,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.SMALL
				}
			});

		googleProcessedMarkerArray.push(marker);
		
		locationDetailsWindow = new LocatorInfoBox({
			map: mappingObj.theMap,
			markerID: marker.markerID,
			latlng: latlngset, 
		});

		/*
		*	Map Events To Marker
		*/
        google.maps.event.addListener(marker, "click", function() {			
			console.log("clicked")
        });

	}
}	