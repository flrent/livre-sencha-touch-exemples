Ext.define('ConfMate.view.intervenants.Liste', {
    extend: 'Ext.dataview.List',
    xtype: 'intervenantsListe',

    config: {
        flex:1,
    	title:'Intervenants',
        store:'Intervenants',
        itemTpl:"{nom}"
    }
});