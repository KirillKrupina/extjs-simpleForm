Ext.ns('App.FormModule');

App.FormModule = Ext.extend(Ext.form.FormPanel, {
   constructor: function (cfg) {
       cfg.layout = 'form';
       cfg.frame = true;
       cfg.renderTo = Ext.getBody();
       cfg.items = [ informationAboutClient, reservingInformation, otherInformation ];
       cfg.border = false;
       cfg.monitorValid = true;
       cfg.buttons = [
           {
               xtype: 'button',
               text: 'Send',
               scope: this,
               formBind: true,
               handler: function () {
                        this.sendForm();
               }
           },
           {
               xtype: 'button',
               text: 'Reset',
               scope: this,
               handler: function () {
                   this.resetForm();
               }
           }
       ];

       App.FormModule.superclass.constructor.call(this, cfg);
   }
});
