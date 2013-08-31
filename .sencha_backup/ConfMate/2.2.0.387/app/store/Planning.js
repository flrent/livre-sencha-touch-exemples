Ext.define('ConfMate.store.Planning', {
    extend: 'Ext.data.Store',

    config: {
        model: 'ConfMate.model.Session',
        proxy: {
            type: 'ajax',
            url: 'data.json',

            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        },
        autoLoad:true,
        grouper: {
           groupFn: function(record) {
                var dateStart = new Date(Date.parse(record.get("debut")));
                return dateStart.getDate()+"th of "+Ext.Date.monthNames[dateStart.getMonth()]+ " - "+(dateStart.getHours().toString().length > 1 ? dateStart.getHours() : "0"+dateStart.getHours())+":"+(dateStart.getMinutes().toString().length > 1 ? dateStart.getMinutes() : "0"+dateStart.getMinutes());
            }
        }
    }
});