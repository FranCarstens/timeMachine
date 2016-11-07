import Backbone from 'backbone'
import Header from './views/header'
import DetailView from './views/detailView.js'
import ListView from './views/listView.js'

const app = function() {
//MODEL
	var ImageCollection = Backbone.Collection.extend({
		url: 'https://instaclone-example.now.sh/api/gram',
		})
	var ImageModel = Backbone.Model.extend ({
		urlRoot: 'https://instaclone-example.now.sh/api/gram/'	
	})

	var SearchCollection = Backbone.Collection.extend({
		url: 'https://instaclone-example.now.sh/api/gram/search'
	})
//CONTROLLER
	var Controller = Backbone.Router.extend({
		routes:{
			'home': 'handleListView',
			'detail/:imageId': 'handlDetail',
			'search/:searchTerm': 'handleSearch',
			'*default': 'handleDefault'
		},
		handleListView: function(){
			// console.log('handeling listView')
			var imageCollection = new ImageCollection()
			var promise = imageCollection.fetch()
			promise.then(
				function(){
					ReactDOM.render(<ListView collection={imageCollection} />, document.querySelector('.body-wrapper'))
				})
		},
		handlDetail: function(imageId){
			//this is how we grab the id from the hash
			var imageModel = new ImageModel({
				id: imageId
			})
			var promise = imageModel.fetch()
			promise.then(
				function(){
					ReactDOM.render(<DetailView model={imageModel} />, document.querySelector('.body-wrapper'))
				})
			// console.log('handeling detail')
		},
		handleSearch: function(searchTerm){
			var searchView = new SearchCollection()
			var promise = SearchCollection.fetch({
				data:{
					'term': searchTerm
				}
			})
			promise.then(
				function(){
					ReactDOM.render(<ListView collection={imageCollection} />, document.querySelector('.body-wrapper'))
				})
		},
		handleDefault: function(){
			location.hash = 'home'
			// console.log('handeling Default')
		}, 
		initialize: function(){
			Backbone.history.start()
			console.log('being born now')
		}
	})
	var controller = new Controller
}
app()	