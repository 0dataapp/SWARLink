const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	SWARLink: '.SWARLink',
	SWARLinkImage: '.SWARLinkImage',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('SWARLink_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows SWARLink', function () {
		browser.assert.elements(SWARLink, 1);
	});

	it('shows SWARLinkImage', function () {
		browser.assert.elements(SWARLinkImage, 1);
	});

});