All of this data is thanks to all the wonderful contributers over at: https://psxdatacenter.com/psx2/

In order to generate these json files I enabled jQuery on the site and ran the following code in the browser console:
```js
var classesToRemove = ['.col4', '.col1', '.col5', '.col8', '.sectionheader', 'th'];
classesToRemove.forEach((className) => jQuery(className).remove());

var allRows = jQuery('tr');
var total_string = "{";
allRows.each((a,b,c)=> { 
if (b.children[0] && b.children[1])
	total_string+="\""+b.children[0].textContent+"\" : \""+b.children[1].textContent+"\",\n" 
})
console.log(total_string,"}");
```

