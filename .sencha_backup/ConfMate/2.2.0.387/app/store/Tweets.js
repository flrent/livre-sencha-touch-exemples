Ext.define('ConfMate.store.Tweets', {
    extend: 'Ext.data.Store',
    requires:'Ext.data.proxy.JsonP',
    
    config: {
        model: 'ConfMate.model.Tweet',
        proxy: {
            type: 'jsonp',
            url: 'http://search.twitter.com/search.json',

            reader: {
                type: 'json',
                rootProperty: 'results'
            },
            extraParams:{
                q:"conf",
                rpp:50,
                p:1
            }
        }
    }
});