Create a Settings page, where user can toggle between celcius and farenheit, etc.

---------------------------------------------------------------------

*** Create an elongated view, displays after a certain break point

---------------------------------------------------------------------

For Search box -

message saying "Enter location" with extra info on hover of a small ? button. 

From https://www.weatherapi.com/docs/ - 

Query parameter based on which data is sent back. It could be following:

Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
city name e.g.: q=Paris
US zip e.g.: q=10001
UK postcode e.g: q=SW1
Canada postal code e.g: q=G2J
<!-- metar:<metar code> e.g: q=metar:EGLL -->
iata:<3 digit airport code> e.g: q=iata:DXB
auto:ip IP lookup e.g: q=auto:ip
IP address (IPv4 and IPv6 supported) e.g: q=100.0.0.1

---------------------------------------------------------------------

<!-- from Manifest.json - icons -->
,
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
    
---------------------------------------------------------------------

reportWebVitals(console.log); commented out of index.js to make console less busy for now

---------------------------------------------------------------------

what are the rules for naming folders .jsx / .js ?

---------------------------------------------------------------------

APIKey.js was committed to git so won't .gitignore without removing first.