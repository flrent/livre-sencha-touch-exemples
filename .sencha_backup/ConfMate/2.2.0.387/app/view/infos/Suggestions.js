Ext.define('ConfMate.view.infos.Suggestions', {
	extend: 'Ext.Panel',
	requires:['Ext.form.Panel'],
	xtype:'infosSuggestions',

	config: {
		title:'Suggestions',
		layout:{
			type:'vbox',
		},
		items:[
			{
				flex:1,
				styleHtmlContent:true,
				html:[
					"<h3>Vous avez une suggestion ?</h3>",
					"<p>Nous sommes à l'écoute de nos participants. N'hésitez pas à nous envoyer toute remarque afin que nous puissions améliorer notre conférence."
				].join("")
			},
			{
				flex:1,
				xtype:'formpanel',
				url:'/',
				defaults:{
					xtype:'textfield',
					labelWidth:''
				},
				items:[
					{
						label:'Nom et prénom',
						name:'nom',
						placeHolder:'Jane Doe'
					},
					{
						label:'Email',
						name:'email',
						placeHolder:'jane@doe.com'
					},
					{
						xtype:'textareafield',
						label:'Message',
						name:'message',
						placeHolder:'Votre message'
					}
				]
			},
			{
				docked:'bottom',
				xtype:'button',
				text:'Envoyer',
				ui:'confirm'
			}
		]
	}
});	