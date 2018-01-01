All of this data is thanks to all the wonderful contributers over at: https://psxdatacenter.com/psx2/

In order to generate these json files I enabled jQuery on the site and ran the following code in the browser console:
```js
jQuery('.col4').remove(); jQuery('.col1').remove();  jQuery('.col5').remove(); jQuery('.col8').remove(); jQuery('.sectionheader').remove()
var allRows = jQuery('tr');
var total_string = "{";
allRows.each((a,b,c)=>total_string+=("\""+b.children[0].textContent+"\" : \""+b.children[1].textContent+"\","))
console.log(total_string,"}");
```

