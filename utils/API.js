//////// map
function addScript() {
    const mapKey = process.env.CAHOOTS_MAP_KEY;
    var mapScript = document.createElement('script');
    mapScript.setAttribute('src', ('https://maps.googleapis.com/maps/api/js?key=' + mapKey + '&callback=initMap'));
    document.body.appendChild(mapScript);
}
addScript();

