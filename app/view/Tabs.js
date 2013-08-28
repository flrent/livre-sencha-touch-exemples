Ext.define('ConfMate.view.Tabs', {
    extend: 'Ext.tab.Panel',

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype:"favorisMain"
            },
            {
                xtype:"planningMain"
            },
            {
                xtype:"intervenantsMain"
            },
            {
                xtype:"twitterMain"
            },
            {
                xtype:"infosMain"
            }
        ]
    }
});
