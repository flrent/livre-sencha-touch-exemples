Ext.define('ConfMate.view.favoris.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'favorisMain',

    config: {
        iconCls:"favorites",
        title:"Favoris",
        items:[
            {
                xtype:'favorisListe'
            }
        ]
    }
});