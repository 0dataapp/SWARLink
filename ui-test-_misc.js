const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('SWARLink_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('SWARLink', function test_SWARLink () {

		it('classes OLSKCommonTie', function () {
			return browser.assert.hasClass(SWARLink, 'OLSKCommonTie');
		});

		it('sets href', function () {
			return browser.assert.attribute(SWARLink, 'href', process.env.SWAR_LINK_URL);
		});

	});

});
