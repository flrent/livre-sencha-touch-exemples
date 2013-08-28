Ext.define('ConfMate.view.planning.Session', {
    extend: 'Ext.dataview.DataView',
    xtype: 'planningSession',

    config: {
        styleHtmlContent:true,
        store:'Session',
        itemTpl:[
            '<h3>{titre}</h3>',
            '<h5>{intervenant.nom}</h3>',
            '<p>{description}</p>'
        ],
        items:[
            {
                xtype:'toolbar',
                docked:"bottom",
                ui:"none",
                items:[
                    {
                        text:'Ajouter aux favoris',
                        cls:"add-to-favorites",
                        ui:'action',
                        iconCls:"favorites"
                    }
                ]
            }
        ]
    }
});
