Ext.define('ConfMate.view.planning.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'planningMain',

    config: {
        iconCls:"calendar",
        title:"Planning",

        items:[
	        {
	        	xtype:'planningListe'
	        }
        ]
    }
});