Ext.define('ConfMate.view.infos.Menu', {
    extend: 'Ext.Panel',
    xtype: 'infosMenu',
    requires:'Ext.dataview.DataView',

    config: {
    	title:'Infos',
    	layout:'vbox',
    	defaults:{
    		flex:1
    	},
        items:[
		    {
		    	html:'<img src="resources/images/logo.png">'
		    },
		    {
		    	xtype:'dataview',
		    	itemTpl:"{nom}",
		    	itemCls:'menuItem',
		    	data:[
		    		{
		    			nom:"Histoire",action:"histoire"
		    		},
		    		{
		    			nom:"Comment venir",action:"venir"
		    		}
		    	]
		    }
        ]
    }
});