Ext.define('ConfMate.view.infos.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'infosMain',

    config: {
        iconCls:"info",
        title:"Infos",

        items:[
            {
                xtype:'infosMenu'
            }
        ]
    }
});