Yet Another DataTables Column Filter - (yadcf)
=====

Usage:
=====

```javascript
  $('#example').dataTable().yadcf([
      {column_number : 0},
      {column_number : 1,data:["Yes","No"]},
      {column_number : 2,column_data_type: "html", html_data_type: "text"}
    ]);
```

All available parameters


* Name  					Required		Type		Default value		Possible values			Description
* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* column_number				true			String													The number of the column to which the filter will be applied
* data						false			Array													When the need of predefined data for filter is needed just use an array ["value1","value2"....] 
* column_data_type			false			String		text				text / html				The type of data in column , use "html" when you have some html code in the column (support parsing of multiple elements)
* html_data_type			false			String		text				text / value / id		When using "html" for column_data_type argument you can choose how exactly to parse your html element/s in column , for example use "text" for the following <span class="someClass">Some text</span>
* filter_container_id		false			String													In case that user don't want to place the filter in column header , he can pass an id of the desired container for the column filter 
* filter_default_label		false			String		Select value								The label that will appear in the select menu filter when no value is selected from the filter
* filter_reset_button_text	false			String		x											The text that will appear inside the reset button next to the select drop down


Example:
=====

http://jsbin.com/eyeviq/1

License
=====

Copyright 2013
Dual licensed under two licenses: GPL v2 license or a BSD (3-point) license (just like DataTables itself)
