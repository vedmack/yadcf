# Yet Another DataTables Column Filter (Yadcf) Change-log

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
