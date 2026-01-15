TEST

odoo.exceptions.UserError: Unable to install module "intrastat_product" because an external dependency is not met: Python library version conflict: python-stdnum>=1.16

cat list-pip-test-ok.txt  | while read pip; do echo $pip | sed -e 's/ /==/g' ; done 
