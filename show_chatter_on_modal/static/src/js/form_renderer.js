odoo.define("show_chatter_on_modal.form_renderer", function (require) {
    "use strict";

    var FormRenderer = require('web.FormRenderer');

    FormRenderer.include({
        _renderNode(node) {
            if (node.tag === 'div' && node.attrs.class === 'oe_chatter') {
                return this._makeChatterContainerTarget();
            }else{
                return this._super.apply(this, arguments);
            }            
        },
    });

    return {
          FormRenderer: FormRenderer
     };

});
