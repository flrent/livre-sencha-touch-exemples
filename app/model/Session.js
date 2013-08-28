Ext.define('ConfMate.model.Session', {
    extend: 'Ext.data.Model',

    config: {
        fields:[
            {name:'titre', type:'string'},
            {name:'description',type:'string'},
            {name:'lieu',type:'string'},
            {name:'debut',type:'date'},
            {name:'fin',type:'date'},
            'intervenant'
        ]
    }
});