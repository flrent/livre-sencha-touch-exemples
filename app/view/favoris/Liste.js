Ext.define('ConfMate.view.favoris.Liste', {
    extend: 'Ext.dataview.List',
    xtype: 'favorisListe',

    config: {
        flex:1,
    	title:'Favoris',
        store:'Favoris',
        grouped:true,
        itemTpl:"{titre}"
    }
});