// Copyright (c) 2024, Dharm and contributors
// For license information, please see license.txt

frappe.ui.form.on('Day Book', {
	// refresh: function(frm) {

	// }
});


frappe.ui.form.on('Day Book Details', {
	close_meter_rating: function(frm,cdt,cdn) {
		var row = locals[cdt][cdn]
		row.sale = row.close_meter_rating-row.opening_meter_rating-row.testing
		refresh_field("day_book_details");
	},
});