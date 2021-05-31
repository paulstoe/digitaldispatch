/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dd_forklift/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
