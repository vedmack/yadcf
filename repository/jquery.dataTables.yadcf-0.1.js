/*global $, jQuery*/

/*
*
* Yet Another DataTables Column Filter - (yadcf)
* 
* File:        jquery.dataTables.yadcf.js
* Version:     0.1
* Author:      Daniel Reznick
* Info:        https://github.com/vedmack/yadcf
* Contact:     vedmack@gmail.com	
* 
* Copyright 2013 Daniel Reznick, all rights reserved.
*
* Dual licensed under two licenses: GPL v2 license or a BSD (3-point) license (just like DataTables itself)
* 
* This source file is distributed in the hope that it will be useful, but 
* WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
* or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
* 
* Parameters:
*
*					
* -------------

* column_number
				Required:			true
				Type:				String
				Description:		The number of the column to which the filter will be applied
				
* data
				Required:			false
				Type:				Array
				Description:		When the need of predefined data for filter is needed just use an array ["value1","value2"....] 
					
* column_data_type
				Required:			false
				Type:				String
				Default value:		text
				Possible values:	text / html	
				Description:		The type of data in column , use "html" when you have some html code in the column (support parsing of multiple elements per cell)

* text_data_delimiter
				Required:			false
				Type:				String
				Description:		Delimiter that seperates text in table column, for example text_data_delimiter: ","
										
* html_data_type
				Required:			false
				Type:				String
				Default value:		text
				Possible values:	text / value / id			
				Description:		When using "html" for column_data_type argument you can choose how exactly to parse your html element/s in column , for example use "text" for the following <span class="someClass">Some text</span>

* filter_container_id
				Required:			false
				Type:				String
				Description:		In case that user don't want to place the filter in column header , he can pass an id of the desired container for the column filter 
		
* filter_default_label
				Required:			false
				Type:				String
				Default value:		Select value
				Description:		The label that will appear in the select menu filter when no value is selected from the filter
									
* filter_reset_button_text
				Required:			false
				Type:				String
				Default value:		x
				Description:		The text that will appear inside the reset button next to the select drop down
*
*
*/
var yadcf = (function ($) {

	'use strict';

	var oTable,
		options;

	function appendSelectFilter(args) {

		var i = 0,
			$filter_selector,
			filter_selector_string,

			data,
			filter_container_id,
			column_number,
			column_data_type,
			html_data_type,
			text_data_delimiter,
			filter_default_label,
			filter_reset_button_text,

			options,
			j,
			k,
			data_length,
			col_inner_elements,
			col_inner_data,
			col_filter_array = {},
			ii;


		for (i; i < args.length; i++) {

			data = args[i].data;
			filter_container_id = args[i].filter_container_id;
			column_number = args[i].column_number;
			column_data_type = args[i].column_data_type;
			html_data_type = args[i].html_data_type;
			text_data_delimiter = args[i].text_data_delimiter;
			filter_default_label = args[i].filter_default_label;
			filter_reset_button_text = args[i].filter_reset_button_text;

			if (column_number === undefined) {
				alert("You must specify column number");
				return;
			}

			if (column_data_type === undefined) {
				column_data_type = "text";
			} else if (column_data_type === "html") {
				if (html_data_type === undefined) {
					html_data_type = "text";
				}
			}

			if (filter_default_label === undefined) {
				filter_default_label = "Select value";
			}

			if (filter_reset_button_text === undefined) {
				filter_reset_button_text = "x";
			}

			options = "<option value=\"" + "-1" + "\">" + filter_default_label + "</option>";

			if (data === undefined) {
				data = oTable._('tr');
				data_length = data.length;

				for (j = 0; j < data_length; j++) {
					if (column_data_type === "html") {
						col_inner_elements = $(data[j][column_number]);
						for (k = 0; k < col_inner_elements.length; k++) {
							switch (html_data_type) {
							case "text":
								col_inner_data = $(col_inner_elements[k]).text();
								break;
							case "value":
								col_inner_data = $(col_inner_elements[k]).val();
								break;
							case "id":
								col_inner_data = col_inner_elements[k].id;
								break;
							}
							if (!(col_filter_array.hasOwnProperty(col_inner_data))) {
								col_filter_array[col_inner_data] = col_inner_data;
								options += '<option value="' + col_inner_data + '">' + col_inner_data + '</option>';
							}
						}
					} else if (column_data_type === "text") {
						if (text_data_delimiter !== undefined) {
							col_inner_elements = data[j][column_number].split(text_data_delimiter);
							for (k = 0; k < col_inner_elements.length; k++) {
								col_inner_data = col_inner_elements[k];
								if (!(col_filter_array.hasOwnProperty(col_inner_data))) {
									col_filter_array[col_inner_data] = col_inner_data;
									options += '<option value="' + col_inner_data + '">' + col_inner_data + '</option>';
								}
							}
						} else {
							col_inner_data = data[j][column_number];
							if (!(col_filter_array.hasOwnProperty(col_inner_data))) {
								col_filter_array[col_inner_data] = col_inner_data;
								options += '<option value="' + col_inner_data + '">' + col_inner_data + '</option>';
							}
						}
					}
				}

			} else {
				for (ii = 0; ii < data.length; ii++) {
					options += '<option value="' + data[ii] + '">' + data[ii] + '</option>';
				}
			}

			if (filter_container_id === undefined) {
				filter_selector_string = oTable.selector + " thead th:eq(" + column_number + ")";
				$filter_selector = $(filter_selector_string).find(".yadcf-filter");
			} else {
				filter_selector_string = "#" + filter_container_id;
				$filter_selector = $(filter_selector_string).find(".yadcf-filter");
			}

			if ($filter_selector.length === 1) {
				$filter_selector.empty();
				$filter_selector.append(options);
			} else {

				if (filter_container_id === undefined) {
					$(filter_selector_string).append("<select class=\"yadcf-filter\" " +
							"onchange=\"yadcf.doFilter('" + filter_selector_string + "', this, " + column_number + ")\" onclick='event.cancelBubble = true;event.stopPropagation();'>" + options + "</select>");
					$(filter_selector_string).find(".yadcf-filter").prev().css("display", "inline-block");

					$(filter_selector_string).find(".yadcf-filter").after("<input value=\"" + filter_reset_button_text + "\" type=\"button\" " +
							"onclick=\"event.cancelBubble = true;event.stopPropagation();yadcf.doFilter('" + filter_selector_string + "', 'clear', " + column_number + "); return false;\" class=\"yadcf-filter-reset-button\">");

				} else {

					if ($("#" + filter_container_id).length === 0) {
						alert("Filter container could not be found.");
					}

					$("<select class=\"yadcf-filter\" " +
							"onchange=\"yadcf.doFilter('" + filter_selector_string + "', this, " + column_number + ")\" onclick='event.cancelBubble = true;event.stopPropagation();'>" +
							options + "</select>").appendTo("#" + filter_container_id);

					$("#" + filter_container_id).find(".yadcf-filter").after("<input value=\"" + filter_reset_button_text + "\" type=\"button\" " +
							"onclick=\"event.cancelBubble = true;event.stopPropagation();yadcf.doFilter('" + "#" + filter_container_id + "', 'clear', " + column_number + "); return false;\" class=\"yadcf-filter-reset-button\">");

				}

			}

			//load value from document data
			if ($(document).data(filter_selector_string + "_val") !== undefined && $(document).data(filter_selector_string + "_val") !== "-1") {
				$(filter_selector_string).find(".yadcf-filter").val($(document).data(filter_selector_string + "_val"));
			}
		}
	}

	function doFilter(filter_selector_string, arg, column_number) {
		if (arg === "clear") {
			$(filter_selector_string).find(".yadcf-filter").val("-1").focus();
			$(filter_selector_string).find(".yadcf-filter").removeClass("inuse");
			$(document).data(filter_selector_string + "_val", "-1");
			oTable.fnFilter("", column_number);
			return;
		}

		$(filter_selector_string).find(".yadcf-filter").addClass("inuse");

		$(document).data(filter_selector_string + "_val", arg.value);

		if (arg.value !== "-1") {
			oTable.fnFilter($(arg).find('option:selected').text(), column_number);
		} else {
			oTable.fnFilter("", column_number);
			$(filter_selector_string).find(".yadcf-filter").removeClass("inuse");
		}
	}

	function getOptions() {
		return options;
	}

    $.fn.yadcf = function (options_arg) {
        oTable = this;
        options = options_arg;

        if (oTable.fnSettings().sAjaxSource === null) {
			appendSelectFilter(yadcf.getOptions());
        } else {
	        if (parseFloat($().jquery) >= 1.7) {
				$(document).on("draw", oTable, function (event) {
					appendSelectFilter(yadcf.getOptions());
	            });
	        } else {
				$(document).delegate(oTable, "draw", function () {
					appendSelectFilter(yadcf.getOptions());
				});
	        }
        }

        return oTable;

    };


    return {
		doFilter : doFilter,
		getOptions : getOptions
    };

}(jQuery));
