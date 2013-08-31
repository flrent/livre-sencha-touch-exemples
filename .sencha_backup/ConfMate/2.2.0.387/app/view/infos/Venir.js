Ext.define('ConfMate.view.infos.Venir', {
    extend: 'Ext.Panel',
    xtype: 'infosVenir',

    config: {
    	title:'Venir',
    	layout:'vbox',
    	defaults:{
    		styleHtmlContent:true
    	},
        items:[
		    {
		    	html:'<h2>Comment venir à la conférence</h2>'
		    },
		    {
		    	html:"<p>Nous ajouterons ici comment venir</p>"
		    }
        ]
    }
});