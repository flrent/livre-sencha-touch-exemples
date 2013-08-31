Ext.define('ConfMate.view.intervenants.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'intervenantsMain',

    config: {
        iconCls:"team",
        title:"Intervenants",

        items:[
        	{
        		xtype:'intervenantsListe'
        	}
        ]
    }
});