Yet Another DataTables Column Filter - (yadcf)
=====
[![CDNJS](https://img.shields.io/cdnjs/v/yadcf.svg)](https://cdnjs.com/libraries/yadcf)

Description:
=====

This jQuery plug-in allows the user to easily add filter components to table columns, the plug-in works on top of the DataTables jQuery plug-in.


Contact/Social:
=====
If you want to ask a question you can post a question on [stackoverflow](http://www.stackoverflow.com) with [yadcf](http://stackoverflow.com/questions/tagged/yadcf) tag

If you like my plugin, you can show your appreciation by following me on [Twitter](https://twitter.com/danielreznick) / [GitHub](https://github.com/vedmack)


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
 - range of dates - make use of the jQuery UI Datepicker widget (with some enhancements) or Bootstrap Datepicker
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
 - allow addition of classes to filters
- External API functions:
 - exFilterColumn: Allows to trigger filter/s externally/programmatically (support ALL filter types!!!) , perfect for showing table with pre filtered columns
 - exGetColumnFilterVal: Allows to retreive  column current filtered value (support ALL filter types!!!)
 - exResetAllFilters: Allows to reset all filters externally/programmatically (support ALL filter types!!!) , perfect for adding a "reset all" button to your page!
 - exResetFilters: Allows to reset specific filters externally/programmatically (support ALL filter types!!!) , can be used for resetting one or more filters
 - initSelectPluginCustomTriggers: Allows to set any select jquery plugin initialize and refresh functions. jQuery selector will be passed to the user defined function to initialize and refresh the plugin.
                                   Great for integrating any jquey select plugin  (Selectize / MultiSelect / etc)
 - exFilterExternallyTriggered: Triggers all the available filters, should be used only when the externally_triggered option used
- Notable datatables API / Features support
 - ColReorder / scrollX / scrollY / stateSave / deferRender / HTML5 data-* attributes / Complex headers

Examples:
=====

[DOM source](http://yadcf-showcase.appspot.com/DOM_source.html)

[DOM source with chosen](http://yadcf-showcase.appspot.com/DOM_source_chosen.html)

[DOM source with select2](http://yadcf-showcase.appspot.com/DOM_source_select2.html)

[DOM / Multiple columns and tables 1.10.0] (http://yadcf-showcase.appspot.com/dom_multi_columns_tables_1.10.html)

[AJAX source](http://yadcf-showcase.appspot.com/ajax_source.html)

[AJAX mData (deep)](http://yadcf-showcase.appspot.com/ajax_mData_source.html)

[Multiple tables](http://yadcf-showcase.appspot.com/multiple_tables.html)

[Server side source](http://yadcf-showcase.appspot.com/server_side_source.html)

[DOM / Ajax multiple 1.10](http://yadcf-showcase.appspot.com/DOM_Ajax_Multiple_1.10.html)

[Externally triggered filters](http://yadcf-showcase.appspot.com/dom_source_externally_triggered.html)

[Cumulative filtering](http://yadcf-showcase.appspot.com/cumulative_filtering.html)


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

Available parameters - being set per column (detailed explanation inside jquery.dataTables.yadcf.js)

* column_number
* filter_type
* custom_func
* data
* data_as_is
* column_data_type
* text_data_delimiter
* html_data_type
* html_data_selector
* filter_container_id
* filter_container_selector
* filter_default_label
* omit_default_label
* filter_reset_button_text
* enable_auto_complete
* sort_as
* sort_order
* sort_as_custom_func
* date_format
* moment_date_format
* ignore_char
* filter_match_mode
* select_type
* select_type_options
* case_insensitive
* filter_delay
* html5_data
* style_class
* reset_button_style_class
* datepicker_type
* exclude
* exclude_label
* filter_plugin_options


Available global parameters - being set per table (detailed explanation inside jquery.dataTables.yadcf.js)

 * externally_triggered
 * cumulative_filtering
 * filters_position
 * filters_tr_index


License:
=====

Copyright (c) 2014 Daniel Reznick, released under the MIT license

