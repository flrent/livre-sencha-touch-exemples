Ext.define('ConfMate.controller.Planning', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            liste:"planningListe",
            navigation:"planningMain"
        },
        control: {
            liste:{
                itemtap:"selectSession"
            }  
        }
    },
    selectSession: function(list, index, target, record, e, eOpts) {
        var store = Ext.getStore("Session");
        store.removeAll(); // suppression d'anciens affichages
        store.add(record); // ajout de la session selectionée
        this.getNavigation().push({xtype:"planningSession",title:record.get("title")});
    }
});