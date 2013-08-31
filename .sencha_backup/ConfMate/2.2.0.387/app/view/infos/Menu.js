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
		    	style:'text-align:center;',
		    	html:'<p><img src="resources/images/logo.png"></p>'
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
		    		},
		    		{
		    			nom:"Suggestions",action:"suggestions"
		    		}
		    	]
		    }
        ]
    }
});