Ext.define('ConfMate.controller.Suggestions', {
    extend: 'Ext.app.Controller',
    requires:['ConfMate.model.Suggestion'],

    config: {
        refs: {
            form:'infosSuggestions formpanel',
            envoyer:'infosSuggestions button'
        },
        control: {
            form:{
                beforesubmit:'validerSuggestion',
                submit:'suggestionEnvoyee'
            },
            envoyer: {
                tap:'envoyerSuggestion'
            }
        }
    },
    envoyerSuggestion: function() {
        this.getForm().submit();
    },
    validerSuggestion: function(form, values, options, eOpts) {
        var suggestion = Ext.create('ConfMate.model.Suggestion', values);
        var errors = suggestion.validate();

        if(!errors.isValid()) {
            var message = "";
            Ext.each(errors.all, function(error) {
                message += error.get("field")+" "+error.get('message')+". ";
            });
            Ext.Msg.alert("Erreur", message, Ext.emptyFn);
            return false;
        }
        else {
            return true;
        }
    },
    suggestionEnvoyee: function(form, result) {
        //controles sur l'objet "result" retourné par le serveur
        Ext.Msg.alert("Merci !", "Votre suggestion a bien été envoyée.", Ext.emptyFn);
    }
});