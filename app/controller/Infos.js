Ext.define('ConfMate.controller.Infos', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            navigation:'infosMain',
            menu:'infosMenu dataview'
        },
        control: {
            menu: {
                itemtap: 'afficherMenu'
            }
        }
    },

    afficherMenu: function(dataview, index, element, record, event) {
        var menu = record.get("action");

        switch(menu) {

            case "histoire":
                this.getNavigation().push({xtype:'infosHistoire'});
                break;

            case "venir":
                this.getNavigation().push({xtype:'infosVenir'});
                break;

            case "suggestions":
                this.getNavigation().push({xtype:'infosSuggestions'});
                break;

            default: 
                break;
        }
    }
});