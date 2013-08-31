Ext.define('ConfMate.model.Intervenant', {
    extend: 'Ext.data.Model',

    config: {
        fields:[
            {name:'nom', type:'string'},
            {name:'description',type:'string'}
        ]
    }
});