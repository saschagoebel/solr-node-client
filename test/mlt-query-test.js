/**
 * Modules dependencies
 */

var mocha = require('mocha'),
	assert = require('chai').assert,
	libPath = process.env['SOLR_CLIENT_COV'] ? '../lib-cov' : '../lib',
	solr = require( libPath + '/solr'),
	SolrError = require(libPath + '/error/solr-error'),
	sassert = require('./sassert');

//TODO support http://wiki.apache.org/solr/MoreLikeThis

// Test suite
var client = solr.createClient();

describe('Client#createQuery()',function(){
	describe('.mlt(options)',function(){
		it('should ',function(done){
			
		});
	});
});