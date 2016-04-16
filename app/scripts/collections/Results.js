import Backbone from 'backbone';
import ResutlsModel from './../models/ResutlsModel.js';

const ResultsCollection = Backbone.Collection.extend({
	model: ResultsModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns'
});

let results = new ResultsCollection();

export default results;