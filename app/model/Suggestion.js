Ext.define('ConfMate.model.Suggestion', {
    extend: 'Ext.data.Model',

    config: {
        fields:[
            {name:'nom', type:'string'},
            {name:'email',type:'email'},
            {name:'message',type:'string'}
        ],
        validations: [
            {type: 'length', field: 'nom', min: 2, message:"Le nom entré est trop court"},
            {type: 'format', field: 'nom', matcher: /([a-z]+)[0-9]{2,3}/},
            {type: 'format', field: 'email',type:'email'},
            {type: 'length', field: 'message', min: 2},
        ]
    }
});