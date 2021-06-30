const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('SWARLink_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('SWARLink', function test_SWARLink () {

		it('classes OLSKCommonTie', function () {
			browser.assert.hasClass(SWARLink, 'OLSKCommonTie');
		});

		it('sets href', function () {
			browser.assert.attribute(SWARLink, 'href', process.env.SWAR_LINK_URL);
		});

	});

	describe('SWARLinkImage', function test_SWARLinkImage () {

		it('sets src', function () {
			browser.assert.attribute(SWARLinkImage, 'src', process.env.SWAR_LINK_ICON_URL);
		});

	});

});
