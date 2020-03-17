Ext.ns('App.FormModule.Fieldsets.informationAboutClient');

var informationAboutClient = {
  border: false,
  items: [
      {
          xtype: 'fieldset',

          title: 'Full Name',
          items: [
              {
                  xtype: 'textfield',
                  fieldLabel: 'First Name',
                  name: 'first-name',
                  allowBlank: false,
                  emptyText: 'Enter your first name...'
              },
              {
                  xtype: 'textfield',
                  fieldLabel: 'Middle Name',
                  name: 'middle-name',
                  allowBlank: true,
                  emptyText: 'Enter your middle name...'
              },
              {
                  xtype: 'textfield',
                  fieldLabel: 'Last Name',
                  name: 'last-name',
                  allowBlank: false,
                  emptyText: 'Enter your last name...'
              },
              {
                  xtype: 'textfield',
                  fieldLabel: 'Phone Number',
                  name: 'phone-number',
                  allowBlank: true,
                  emptyText: '+38(0XX)XXX-XX-XX'
              },
              {
                  xtype: 'textfield',
                  fieldLabel: 'E-mail',
                  name: 'email',
                  allowBlank: false,
                  emptyText: 'example@mail.com'
              },
          ]
      },
  ]
};


