# Copyright (c) 2024, Dharm and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class DailySales(Document):
	# pass
    def before_save(self):
        total_sale = 0
        for i in self.daily_sales_details:
            total_sale+=i.amount

        self.total_sale = total_sale
