Ext.define('ConfMate.store.Intervenants', {
	extend:'Ext.data.Store',
	
	config: {
		model:'ConfMate.model.Intervenant',
		autoLoad:true,
		proxy: {
        	type: 'ajax',
            url: 'intervenants.json',

            reader: {
                type: 'json'
            }
        }
	}
});