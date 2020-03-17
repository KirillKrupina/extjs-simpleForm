Ext.ns('App.FormModule.Methods.sendForm');

Ext.override(App.FormModule, {
   sendForm: function () {
       var form = this.getForm().getValues();
       console.log(form);
   }
});
