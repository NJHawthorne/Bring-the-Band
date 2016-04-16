import Backbone from 'backbone';

const ResultsModel = Backbone.Model.extend({
	defaults: {
		artist: '',
		thumbnail: '',
		votes: 0
	},
	rootUrl: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
	idAttribute: '_id'
});

export default ResultsModel;