Ext.define('ConfMate.view.twitter.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'twitterMain',

    config: {
        iconCls:"chat",
        title:"Twitter",

        items:[{
        	xtype:'twitterListe'
        }]
    }
});