Yet Another DataTables Column Filter - (yadcf)
=====

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


[yadcf in action](http://jsbin.com/aperen/1/)


License
=====

Copyright 2013
Dual licensed under two licenses: GPL v2 license or a BSD (3-point) license (just like DataTables itself)









[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/98b24f2a1ca5deaaaa08b94dd52594ec "githalytics.com")](http://githalytics.com/vedmack/yadcf)
