Yet Another DataTables Column Filter - (yadcf)
=====

Description:
=====

This jQuery plug-in allows the user to easily add filter components to table columns, the plug-in works on top of the DataTables jQuery plug-in.
If you are using this plugin it would be nice if you drop me an email to vedmack@gmail.com with some feedback.


Features:
=====

  - Various filter options: 
   - select input
   - autocomplete input - make use of the jQuery UI Autocomplete widget (with some enhancements)
  - Parsing various types of columns: 
   - plain text 
   - plain text with delimiter
   - one or more HTML elements with the ability to extract text / value / id from each HTML element
  - Multiple tables support
  - CSS support:
   - each filter element has got a css style class , so its style can be easily overridden
  - Reset button for filter:
   - next to each filter a reset button will appear (this button allows the user to reset the filter)
  - Filter in use visual notification:
   - when a certain filter is being used it will be highlighted (the color of highlight can easily be changed with css)
  - Miscellaneous: 
   - predefined data source for filter (array of strings)
   - ability to place the filter in an external html element (for example: inside a div element)
   - change the filter's default label (Select value, etc)
   - change the filter's reset button text (x, clear etc)
   - define how the values in the filter will be sorted
   - define the order in which the values in the filter will be sorted


Examples:
=====

[DOM source example](http://yadcf-showcase.appspot.com/DOM_source.html)

[AJAX source example](http://yadcf-showcase.appspot.com/ajax_source.html)

[Multiple tables example](http://yadcf-showcase.appspot.com/multiple_tables.html)


Usage:
=====

```javascript
$(document).ready(function(){
  $('#example').dataTable().yadcf([
    {column_number : 0},
    {column_number : 1, filter_container_id: "external_filter_container", sort_as: "num"},
    {column_number : 2, data:["Yes","No"], filter_default_label: "Select Yes/No"},
    {column_number : 3, text_data_delimiter: ",", enable_auto_complete: true},
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
* enable_auto_complete
* sort_as
* sort_order


License
=====

Copyright 2013
Dual licensed under two licenses: GPL v2 license or a BSD (3-point) license (just like DataTables itself)






[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/98b24f2a1ca5deaaaa08b94dd52594ec "githalytics.com")](http://githalytics.com/vedmack/yadcf)
