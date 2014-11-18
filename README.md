Yet Another DataTables Column Filter - (yadcf)
=====

Description:
=====

This jQuery plug-in allows the user to easily add filter components to table columns, the plug-in works on top of the DataTables jQuery plug-in.


Contact/Social:
=====
If you want to ask a question use my [google group](https://groups.google.com/forum/#!forum/daniels_code)

If you like my plugin, you can show your appreciation by following me on [Twitter](https://twitter.com/danielreznick) / [GitHub](https://github.com/vedmack).


Features:
=====

- Support DataTables 1.10.0 - Use yadcf.init(...) for new API (Capital "D")
- Support all data source: DOM, Javascript, Ajax and server-side processing (1.10.0 +)
- Various filter options: 
 - select input
 - multiple selection input
 - text input
 - autocomplete input - make use of the jQuery UI Autocomplete widget (with some enhancements)
 - date input - make use of the jQuery UI Datepicker widget (with some enhancements)
 - range of numbers
 - range of numbers with slider widget - make use of the jQuery UI Slider widget (with some enhancements)
 - range of dates - make use of the jQuery UI Datepicker widget (with some enhancements)
 - custom function
- Filters can be placed in the header (thead) or in the footer (tfoot) , second argument of yadcf constructor or third argument of init function
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
 - integration with the Chosen / Select2 plugins (for single and multiple select)
 - integration with the Datatables ColVis plugin (1.10.0 +)
 - filter delay (for text / range_number / range_date filters / range_number_slider)
 - predefined data source for filter (array of strings or objects)
 - mData support (including deeply nested objects)
 - ability to place the filter in an external html element (for example: inside a div element)
 - ability to control matching mode of the filter (Possible values: contains / exact / startsWith)
 - change the filter's default label (Select value, etc)
 - change the filter's reset button text (x, clear etc)
 - define how the values in the filter will be sorted
 - define the order in which the values in the filter will be sorted
 - support all major browser (including IE8)
 - define in which date format the date will be parsed and displayed in datepicker widget
 - support aoColumns { "bVisible": false }
 - support for case sensitive filtering
- External API functions:
 - exFilterColumn: Allows to trigger filter/s externally/programmatically (support ALL filter types!!!) , perfect for showing table with pre filtered columns
 - exGetColumnFilterVal: Allows to retreive  column current filtered value (support ALL filter types!!!)	
- Notable datatables API support
 - sScrollX / sScrollY / bStateSave / bDeferRender / HTML5 data-* attributes

Examples:
=====

[DOM source example](http://yadcf-showcase.appspot.com/DOM_source.html)

[DOM source with chosen example](http://yadcf-showcase.appspot.com/DOM_source_chosen.html)

[DOM source with select2 example](http://yadcf-showcase.appspot.com/DOM_source_select2.html)

[AJAX source example](http://yadcf-showcase.appspot.com/ajax_source.html)

[AJAX mData (deep) example](http://yadcf-showcase.appspot.com/ajax_mData_source.html)

[Multiple tables example](http://yadcf-showcase.appspot.com/multiple_tables.html)

[Server side source example](http://yadcf-showcase.appspot.com/server_side_source.html)

[DOM Ajax Multiple 1.10](http://yadcf-showcase.appspot.com/DOM_Ajax_Multiple_1.10.html)


Usage:
=====

```javascript
$(document).ready(function(){
  //Old datatable API (lowercase "D")
  $('#example').dataTable().yadcf([
    {column_number : 0},
    {column_number : 1, filter_type: "range_number_slider", filter_container_id: "external_filter_container"},
    {column_number : 2, data: ["Yes", "No"], filter_default_label: "Select Yes/No"},
    {column_number : 3, filter_type: "auto_complete", text_data_delimiter: ","},
    {column_number : 4, column_data_type: "html", html_data_type: "text", filter_default_label: "Select tag"}]);
  
  //New datatable API (capital "D")
  var myTable = $('#example').DataTable();
  
  yadcf.init(myTable, [
    {column_number : 0},
    {column_number : 1, filter_type: "range_number_slider", filter_container_id: "external_filter_container"},
    {column_number : 2, data: ["Yes", "No"], filter_default_label: "Select Yes/No"},
    {column_number : 3, filter_type: "auto_complete", text_data_delimiter: ","},
    {column_number : 4, column_data_type: "html", html_data_type: "text", filter_default_label: "Select tag"}]);
});
```

All available parameters (detailed explanation inside jquery.dataTables.yadcf.js)

* column_number
* filter_type
* custom_func
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
* date_format
* ignore_char
* filter_match_mode
* select_type
* select_type_options
* case_insensitive
* filter_delay
* html5_data


License:
=====

Copyright (c) 2014 Daniel Reznick, released under the MIT license
