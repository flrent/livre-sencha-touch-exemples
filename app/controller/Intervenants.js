Ext.define('ConfMate.controller.Intervenants', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            navigation:'intervenantsMain'
        },
        control: {
            intervenantsListe:{
                itemtap:"showIntervenant"
            }
        }
    },
    showIntervenant: function(list, index, target, record, e, eOpts) {
        this.getNavigation().push({
            xtype:'intervenantsIntervenant',
            title:record.get("nom"),
            data:record.getData()
        });
    }
});