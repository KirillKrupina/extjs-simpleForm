Ext.ns('App.FormModule.Methods.resetForm');

Ext.override(App.FormModule, {
    resetForm: function () {
        this.getForm().reset();
        console.log('reseted');
    }
});
