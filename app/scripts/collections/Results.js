import Backbone from 'backbone';
import ResultsModel from './../models/ResultsModel.js';

const ResultsCollection = Backbone.Collection.extend({
	model: ResultsModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/nate-hawthorne'
});

let results = new ResultsCollection();

export default results;