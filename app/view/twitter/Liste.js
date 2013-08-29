Ext.define('ConfMate.view.twitter.Liste', { 
	extend: 'Ext.dataview.List',
	xtype: 'twitterListe',
	requires:['Ext.plugin.PullRefresh'],

	config: { 
		flex:1,
		title:'Tweets',
		store:'Tweets',
		itemTpl: '<img src="{profile_image_url}" /><span>{from_user}</span>{text}', 
		plugins: [
			{
				xclass: 'Ext.plugin.PullRefresh', 
				pullRefreshText: 'Tirez pour Rafraichir', 
				loadingText:'Chargement...', 
				releaseRefreshText:' rafraichir'
			} 
		]
	}
});