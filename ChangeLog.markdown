# Yet Another DataTables Column Filter (yadcf) Change-log

## 0.9.1 still in beta (grab latest stable from https://github.com/vedmack/yadcf/releases)
* Added support to AMD and CommonJS https://github.com/vedmack/yadcf/pull/356
* Improved filter values alpha numeric sorting, sort_as: "alphaNum"
* Fixed autocomplete in cumulative mode filtering
* Fixed chosen in cumulative mode filtering https://github.com/vedmack/yadcf/issues/344
* Support jQuery 3 (for .dataTable({}).yadcf api) https://github.com/vedmack/yadcf/issues/360
* Some of additional fixed issues https://github.com/vedmack/yadcf/issues/346 / https://github.com/vedmack/yadcf/pull/362 / https://github.com/vedmack/yadcf/issues/363



## 0.9.0

* Fixed autocomplete with dt in ajax source https://github.com/vedmack/yadcf/issues/282
* New option, omit_default_label - Prevent yadcf from adding "default_label" (Select value / Select values)
* Fixed destroy for multiple tables https://github.com/vedmack/yadcf/issues/293
* Allow selecting date and time (without closing filter) in date filtering https://github.com/vedmack/yadcf/issues/296
* Added global property - filters_tr_index: Allow to control the index of the <tr> inside the thead of the table, e.g when one <tr> is used for headers/sort and another <tr> is used for filters https://github.com/vedmack/yadcf/issues/297
* Fixed values with quotation marks filtered incorrectly by filter_type select https://github.com/vedmack/yadcf/issues/317
* Added moment_date_format for better parsing when using datepicker_type: 'bootstrap-datetimepicker'
* Support jQuery 3 https://github.com/vedmack/yadcf/issues/336
* Some of additional closed issues https://github.com/vedmack/yadcf/issues/295 / https://github.com/vedmack/yadcf/issues/308 / https://github.com/vedmack/yadcf/issues/314
  https://github.com/vedmack/yadcf/issues/342 / https://github.com/vedmack/yadcf/issues/351 / https://github.com/vedmack/yadcf/issues/347
	


## 0.8.9

* Cumulative filtering - filter values are being populated from the filtered rows (remaining table data after filtering) https://github.com/vedmack/yadcf/issues/196
* Time (single / range) filtering is now possible (hh:mm / HH:mm when using datepicker_type: 'bootstrap-datetimepicker') https://github.com/vedmack/yadcf/issues/168
* Added initSelectPluginCustomTriggers - Allows to set any select jquery plugin initialize and refresh functions.(PR by gauravjhs)
* Fixed auto complete filter
* Fixed select2 (v.4.x) with server side processing https://github.com/vedmack/yadcf/issues/216
* Fixed select2 reset https://github.com/vedmack/yadcf/issues/232
* Destroy third party plugins on datatable destroy https://github.com/vedmack/yadcf/issues/213
* Prevent column sort when hitting Enter in filter https://github.com/vedmack/yadcf/issues/233
* Added data_as_is attribute to use when you want to define your own <option></option> for the filter https://github.com/vedmack/yadcf/issues/245
* Ignore empty/sparse rows for range filters https://github.com/vedmack/yadcf/issues/273
* Some of additional closed issues https://github.com/vedmack/yadcf/issues/227 / https://github.com/vedmack/yadcf/issues/236 / https://github.com/vedmack/yadcf/issues/257
  https://github.com/vedmack/yadcf/issues/242 / https://github.com/vedmack/yadcf/issues/264 / https://github.com/vedmack/yadcf/issues/265 / https://github.com/vedmack/yadcf/issues/252
  https://github.com/vedmack/yadcf/issues/270 / https://github.com/vedmack/yadcf/issues/262 / https://github.com/vedmack/yadcf/issues/272 / https://github.com/vedmack/yadcf/issues/263
  https://github.com/vedmack/yadcf/issues/271 / https://github.com/vedmack/yadcf/issues/276 / https://github.com/vedmack/yadcf/issues/279
  


## 0.8.8

* Add regex for filter_match_mode property (xmikew)
* Added `alphaNum` and `custom` to the `sort_as` and added `sort_as_custom_func`
* New property, style_class - allows adding additional class/classes to filter 
* Added and exclude filtering checkbox (currently available for the text filter)
* New property, append_data_to_table_data to place your data array in addition to the values that yadcf grabs from the table
* Aded support for Select2 v.4.0 
* Added exResetFilters function to reset specific filters (one or more) https://github.com/vedmack/yadcf/issues/162
* Added html5_data support for range_number and range_number_slider https://github.com/vedmack/yadcf/issues/158
* Added externally_triggered and exFilterExternallyTriggered function to allow creating "search forms" , fill the filters and hit the "filter" button to filter them all http://yadcf-showcase.appspot.com/dom_source_externally_triggered.html
* ColReorder support for all filter types! https://github.com/vedmack/yadcf/issues/138
* Added multi_select with selects & chosen for initMultipleTables and initMultipleColumns https://github.com/vedmack/yadcf/issues/132
* Predefined data can be added in addition to values that yadcf grabs from the table column, usage - append_data_to_table_data: true , https://github.com/vedmack/yadcf/issues/178
* custom_func and multi_select_custom_func passing third argument (array that holds the values of the entire row) to the custom function, https://github.com/vedmack/yadcf/issues/179
* New property for filter, style_class - allows adding additional class/classes to filter - available for the following filters: select / multi_select / text / custom_func / multi_select_custom_func
* TL;DR (Features / Enhancements / Bugs)
  
## 0.8.7

* Support complex headers (rowspan / colspan) https://github.com/vedmack/yadcf/issues/119
* Support for ColReorder including server side and state saving (at the moment for 'select' and 'text' filters) https://github.com/vedmack/yadcf/issues/107 and https://github.com/vedmack/yadcf/issues/151
* Added initMultipleColumns function to allows to add filter for multiple columns on a table https://github.com/vedmack/yadcf/issues/79
* initMultipleTables is now supports select filter type too https://github.com/vedmack/yadcf/issues/132 (still a work in progress)
* Allow advanced selection of value from html code inside the td element - html_data_type support now 'selector' type  (must provide value for 'with html_data_selector' too), https://github.com/vedmack/yadcf/issues/116
* Skip empty strings in the column (avoid entering empty strings into the select / auto_complete filters) https://github.com/vedmack/yadcf/pull/112
* Support custom_func / multi_select_custom_func in exResetAllFilters and exFilterColumn functions https://github.com/vedmack/yadcf/issues/126
* Bugs / Features 	https://github.com/vedmack/yadcf/issues/136 / https://github.com/vedmack/yadcf/issues/131 / https://github.com/vedmack/yadcf/issues/142 /
					https://github.com/vedmack/yadcf/issues/123 / https://github.com/vedmack/yadcf/issues/139 / https://github.com/vedmack/yadcf/issues/148
					https://github.com/vedmack/yadcf/issues/144 / https://github.com/vedmack/yadcf/issues/155

## 0.8.6

* New filter type: multi select filter based on custom function, filter_type: "multi_select_custom_func", https://github.com/vedmack/yadcf/issues/99
* Added new attribute, html5_data, for HTML5 data-* attributes support(http://www.datatables.net/examples/advanced_init/html5-data-attributes.html), https://github.com/vedmack/yadcf/issues/106
* Support for datatables destroy event, https://github.com/vedmack/yadcf/issues/102
* Fallback for column_data_type: "html" without real html but simple text


## 0.8.5

* New Feature, added support for sScrollX / sScrollY https://github.com/vedmack/yadcf/issues/43
* New Feature, filters can be placed in the footer or header https://github.com/vedmack/yadcf/issues/85
* New Feature, filter_type: 'custom_func' support state saving https://github.com/vedmack/yadcf/issues/92
* New Feature, Select2 allow use of placeholder with allowClear properties https://github.com/vedmack/yadcf/issues/91
* Bugs fix	https://github.com/vedmack/yadcf/issues/89 
			https://github.com/vedmack/yadcf/issues/68 (sub issue)
			https://github.com/vedmack/yadcf/issues/95
			https://github.com/vedmack/yadcf/pull/93
		   

## 0.8.4

* New feature, added initFilterMultipleTables function, one (currently only filter_type: "text") filter for multiple tables - filter at once! https://github.com/vedmack/yadcf/issues/80
* New feature, added exResetAllFilters function: Allows to reset all filters externally/programmatically (support ALL filter types!!!) , perfect for adding a "reset all" button to your page! https://github.com/vedmack/yadcf/issues/78
* exGetColumnFilterVal support new Datatable  (Capital "D") https://groups.google.com/forum/#!topic/daniels_code/4ryW4_0P2EE
* Fixed IE8 issues https://github.com/vedmack/yadcf/issues/73
* Migrated to MIT license https://github.com/vedmack/yadcf/issues/82
* Better support for columnDefs
* Date filtering with server side configuration will send the value / from-to (if range date) as is (without converting into milliseconds)
* Bug fixes



## 0.8.3

* Added new filter type: filter based on custom function, filter_type: "custom_func". Read docs (in yadcf js) and see showcase example http://yadcf-showcase.appspot.com/DOM_source.html, https://github.com/vedmack/yadcf/issues/61
* exFilterColumn is now support sever side mode (non range filters only) https://github.com/vedmack/yadcf/issues/69 
* Fixed range sliders combined with filter_container_id property https://github.com/vedmack/yadcf/issues/68
* Escape special chars in multi select filter https://github.com/vedmack/yadcf/issues/74
* Additional minor bug fixes


## 0.8.2

* Added integration with Datatables new API (Capital "D") - use new yadcf init function, yadcf.init(table, array of objects); usage example: http://yadcf-showcase.appspot.com/DOM_Ajax_Multiple_1.10.html
* Added integration with Select2 plugin https://github.com/vedmack/yadcf/issues/63
* Added integration with DataTables ColVis plugin https://github.com/vedmack/yadcf/issues/56


## 0.8.0

* Added support for server-side processing filtering(1.10.0) - all filters are fully working on server-side processing
* filter_delay is now supported in text / range_number / range_date filters / range_number_slider filters, this option can be really handy when working with server-side processing (but not only)

## 0.7.4

* Added optional delay (usage example filter_delay: 1000) for filter_type: "text" (allows to delay filtering while typing characters) https://github.com/vedmack/yadcf/issues/51
* Allow hide filter reset button for filter_type: "multi_select" https://github.com/vedmack/yadcf/issues/55
* Added placeholder for multiple select mode (without Chosen integration) https://github.com/vedmack/yadcf/issues/54


## 0.7.2

* Added another external API function : exGetColumnFilterVal, Allows to retrieve column current filtered value (support ALL filter types!!!) https://github.com/vedmack/yadcf/issues/45
* "data" property supports array of objects [{value: 'Some Data 1', label: 'One'}, {value: 'Some Data 3', label: 'Three'}] (supported in select / multi_select filters) https://github.com/vedmack/yadcf/issues/48
* Bug fix https://github.com/vedmack/yadcf/issues/49
* Several code optimizations


## 0.7.0

* Reimplemented exFilterColumn to support ALL filter types!!!  + Now it can be used even for multiple pre filtered columns https://github.com/vedmack/yadcf/issues/46
* Bug fix https://github.com/vedmack/yadcf/issues/47


## 0.6.9

* Added new filter type: multiple selection, filter_type: "multi_select". With or without Chosen plugin support (select_type: 'chosen') (https://github.com/vedmack/yadcf/issues/41) , thanks goes to Ryan Harris https://github.com/vedmack/yadcf/pull/23


## 0.6.7

* Added support for the DataTables 1.10.0-beta.2 https://github.com/vedmack/yadcf/issues/38
* Bug fix https://github.com/vedmack/yadcf/issues/42


## 0.6.4

* Bug fix 


## 0.6.3

* Added new filter type: text input (a simple input text) filter_type: "text" (https://github.com/vedmack/yadcf/issues/34)
* Added new feature: case_insensitive, can be set to false or true (default) (https://github.com/vedmack/yadcf/issues/35)
* Added new mode "startsWith" for filter_match_mode (https://github.com/vedmack/yadcf/issues/37)
* Added new feature: hide filter reset button (merged pull https://github.com/vedmack/yadcf/pull/30  <- Thanks to Gator92)


## 0.6.0

* Added integration with Chosen plugin (for the select filter)
* For the integration with Chosen: added two new attributes, 'select_type' to allow turning of simple select into chosen select 
  and 'select_type_options' used to pass an object to the chosen constructor , don't forget to include the chosen js file and read/look at the docs/showcase


## 0.5.8

* Added new filter type: date input, make use of the jQuery UI Datepicker widget, filter_type: "date" (https://github.com/vedmack/yadcf/issues/26)
* Several code enhancements


## 0.5.6

* Added support for bStateSave https://github.com/vedmack/yadcf/issues/22
* Added support for bDeferRender https://github.com/vedmack/yadcf/issues/25


## 0.5.0

* Added support for mData (including deeply nested objects) https://github.com/vedmack/yadcf/issues/20
* Bug fix


## 0.4.7

* New feature: filter_match_mode, Allows to control the matching mode of the filter (supported in select and auto_complete filters), Possible values: contains / exact


## 0.4.6

* Added first external API function : exFilterColumn, allows to trigger filter externally/programmatically (currently support only filter_type : "select") , perfect for showing table after its being filtered (onload) (https://github.com/vedmack/yadcf/issues/14) 
* Added support for aoColumns { "bVisible": false } (https://github.com/vedmack/yadcf/issues/16)
* Added support for column_data_type & html_data_type in Range Number Slider Filter (https://github.com/vedmack/yadcf/issues/15)


## 0.4.2

* Added new attribute to yadcf constructor: ignore_char, Tells the range_number and range_number_slide to ignore specific char while filtering (that char can used as number separator) https://github.com/vedmack/yadcf/issues/9
* Fixed autocomplete in external container (thanks to tobbi007) https://github.com/vedmack/yadcf/commit/716fdd0d3c11ada048a51dd5ec9bbd9213b5ea8d


## 0.4.0

* Added new filter type: range between two dates with jQuery UI Datepicker widget, filter_type: "range_number_slider" (https://github.com/vedmack/yadcf/issues/6)
* Added new attribute to yadcf constructor: date_format, it defines the format in which the date values are being parsed into Date object and also in which format the datepicker will display the selected dates, default value: "mm/dd/yyyy"


## 0.3.8

* Added new filter type: range between two numbers with jQuery UI Slider widget, filter_type: "range_number_slider" (https://github.com/vedmack/yadcf/issues/6)
* Fixed IE8 issues (https://github.com/vedmack/yadcf/issues/7)



## 0.3.5

* Added new filter type: range between two numbers
* Added new attribute to yadcf constructor: filter_type (String), possible values are select / auto_complete / range_number, (default is select)
   - In order to set custom labels for the range inputs use the filter_default_label attribute with array of two string as input , example: filter_default_label: ["myFrom", "myTo"]
* enable_auto_complete attribute is now deprecated, although its still can be used I recommend to use filter_type: "auto_complete"


   
## 0.3.3

* Added two attributes:
   - sort_as : Defines how the values in the filter will be sorted, alphabetically or numerically (default is alphabetically)
   - sort_order : Defines the order in which the values in the filter will be sorted, ascending or descending  (default is ascending)



## 0.3.1

* Better align of filter + close button (inside a wrapper div)



## 0.3.0

* Added support for multiple tables



## 0.2.0

* Added enable_auto_complete option
* Several code enhancements (added ids to filters etc...)

