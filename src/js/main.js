Ext.ns('App');
App.run = function () {

    var form = new App.FormModule({
        border: false,
        title: 'Reservation Form',
        width: 320,
        padding: 5,
        items: [form],
        shadow: false
    }).show();
};
