Yet Another DataTables Column Filter - (yadcf)
=====

Features:
=====

  - Parsing various types of columns: 
   - plain text 
   - plain text with delimiter
   - one or more HTML elements with the ability to extract text / value / id from each HTML element
  - Css support:
   - each filter element got css style class , so its style can be easily overridden
  - Reset button for filter:
   - next to each filter a reset button will appear (this button allows the user to reset the filter)
  - Filter in use visual notification:
   - when certain filter is being used it will be highlighted (the color of highlight can easily be changed with css)
  - Miscellaneous 
   - predefined data for filter (array of strings)
   - ability to place the filter in external html element (for example some div element)
   - change filter default label (Select value, etc)
   - change filter reset button text (x, clear etc)


Usage:
=====

```javascript
$(document).ready(function(){
  $('#example').dataTable().yadcf([
    {column_number : 0},
    {column_number : 1, filter_container_id: "external_filter_container"},
    {column_number : 2, data:["Yes","No"], filter_default_label: "Select Yes/No"},
    {column_number : 3, text_data_delimiter: ",", filter_default_label: "Select value"},
    {column_number : 4, column_data_type: "html", html_data_type: "text", filter_default_label: "Select tag"}]);
});
```

All available parameters (detailed explanation inside jquery.dataTables.yadcf.js)

* column_number
* data
* column_data_type
* text_data_delimiter
* html_data_type
* filter_container_id
* filter_default_label
* filter_reset_button_text


Example:
=====


[yadcf in action](http://jsbin.com/esezof/1/)


License
=====

Copyright 2013
Dual licensed under two licenses: GPL v2 license or a BSD (3-point) license (just like DataTables itself)









[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/98b24f2a1ca5deaaaa08b94dd52594ec "githalytics.com")](http://githalytics.com/vedmack/yadcf)
