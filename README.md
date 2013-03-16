Yet Another DataTables Column Filter - (yadcf)
=====

Usage:
=====

```javascript
  $('#example').dataTable().yadcf([
      {column_number : 0},
      {column_number : 1, data:["Yes","No"]},
      {column_number : 2, column_data_type: "html", html_data_type: "text"}
    ]);
```

All available parameters

* column_number
* data
* column_data_type
* html_data_type
* filter_container_id
* filter_default_label
* filter_reset_button_text


Example:
=====

http://jsbin.com/eyeviq/1

License
=====

Copyright 2013
Dual licensed under two licenses: GPL v2 license or a BSD (3-point) license (just like DataTables itself)
