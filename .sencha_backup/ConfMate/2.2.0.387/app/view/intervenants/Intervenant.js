Ext.define('ConfMate.view.intervenants.Intervenant', {
    extend: 'Ext.Panel',
    xtype: 'intervenantsIntervenant',

    config: {
        styleHtmlContent:true,
        tpl:[
            '<h3>{nom}</h3>',
            '<h5>{description}</h3>'
        ]
    }
});
