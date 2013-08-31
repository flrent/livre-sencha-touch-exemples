Ext.define('ConfMate.view.planning.Liste', {
    extend: 'Ext.dataview.List',
    xtype: 'planningListe',

    config: {
        flex:1,
    	title:'Planning',
        store:'Planning',
        grouped:true,
        itemTpl:"{titre}"
    }
});