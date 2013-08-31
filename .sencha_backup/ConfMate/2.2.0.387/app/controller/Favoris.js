Ext.define('ConfMate.controller.Favoris', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            navigation:'favorisMain',
            favorisListe:'favorisListe',
        },
        control: {
            favorisListe:{
                itemtap:"supprimerFavoris"
            }
        }
    },
    supprimerFavoris: function(list, index, target, record, e, eOpts) {
        Ext.Msg.confirm("Suppression", "Voulez-vous vraiment supprimer cette session de vos favoris ?", function(buttonId,value) {
            if(buttonId=="yes") {
                Ext.getStore("Favoris").remove(record);
                Ext.getStore("Favoris").sync();
            }
        });
    }
});