Ext.define('ConfMate.controller.Session', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            session:"planningSession",
            ajouterAuFavoris:'planningSession button[cls=add-to-favorites]'
        },
        control: {
            ajouterAuFavoris:{
                tap:"ajouterAuFavoris"
            }
        }
    },
    ajouterAuFavoris: function() {
      var storeFavoris = Ext.getStore("Favoris");
      var session = Ext.getStore("Session").getAt(0);
      
      session.setDirty(); // permet d'indiquer au Store de le prendre en compte lors de la synchronisation
      storeFavoris.add(session);
      storeFavoris.sync();

      Ext.Msg.alert('Session', 'Cette session fait maintenant prtie de vos favoris.', Ext.emptyFn);
    }
});