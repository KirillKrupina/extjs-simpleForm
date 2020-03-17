Ext.ns('App.FormModule.Fieldsets.reservingInformation');

var quantity = [
  [1, '1'],
  [2, '2'],
  [3, '3'],
  [4, '4'],
];

var quantityStore = new Ext.data.ArrayStore({
    data: quantity,
    fields: ['id','quantity']
});

var reservingInformation = {
    border: false,
    items: [
        {
            xtype: 'fieldset',
            title: 'Reserving Information',
            items: [
                {
                    xtype: 'combo',
                    fieldLabel: 'People Quantity',
                    name: 'people-quantity',
                    store: quantityStore,
                    displayField: 'quantity',
                    valueField: 'id',
                    triggerAction: 'all',
                    mode: 'local',
                    width: 150
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Arriving date',
                    name: 'arriving-date',
                    allowBlank: false,
                }
            ]
        },
    ]
};
