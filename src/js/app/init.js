/**
 *
 * target.init
 *
 * override default settings (if specified)
 * initialize all components on doc.ready
 *
 */
;((target, undefined) => {
	
	'use strict';
	
	target.init = function(options) {
	
		var _this = this;

		// override defaults with user settings
		this.utils.mixin(this.config, options);

		// init services
		this.events = new window.Mediator();
		this.window = new this.Window(this);
		this.domObserver = new this.DomObserver(this);

		// init components
		this.componentFactory = new this.ComponentFactory(this);
		document.addEventListener('DOMContentLoaded', function() {

			_this.componentFactory.init();
		
		}, false);
	
	};

})(window.target = window.target || {});