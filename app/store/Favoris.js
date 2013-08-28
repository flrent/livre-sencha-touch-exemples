Ext.define('ConfMate.store.Favoris', {
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	
	config: {
		model:'ConfMate.model.Session',
		proxy: {
			type: 'localstorage',
			id:'favoris'
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