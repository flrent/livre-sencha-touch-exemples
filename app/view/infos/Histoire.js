Ext.define('ConfMate.view.infos.Histoire', {
    extend: 'Ext.Panel',
    xtype: 'infosHistoire',

    config: {
    	title:'Histoire',
    	layout:'vbox',
    	defaults:{
    		styleHtmlContent:true
    	},
        items:[
		    {
		    	html:'<h2>Histoire de la conférence</h2>'
		    },
		    {
		    	html:"<p>Nous ajouterons ici le contenu de notre histoire</p>"
		    }
        ]
    }
});