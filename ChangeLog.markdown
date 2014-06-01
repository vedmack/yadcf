# Yet Another DataTables Column Filter (Yadcf) Change-log

## 0.7.2

* Added another external API function : exGetColumnFilterVal, Allows to retreive column current filtered value (support ALL filter types!!!) https://github.com/vedmack/yadcf/issues/45
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

