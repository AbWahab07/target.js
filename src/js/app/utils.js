/**
 * target.utils
 *
 * utility methods for use throughout library
 */ 
;((target, undefined) => {
	'use strict';
	
	var config = target.config;

	target.utils = {
		
		/**
		 * _shallow_ mixins on objects
		 */
		mixin: (origObj, newObj) => {
		
			var k;
			var origV;
			var newV;
			var kk;
		
			for (k in newObj) {
		
				if (newObj.hasOwnProperty(k)) {
		
					newV = newObj[k];
					origV = origObj[k];

					origObj[k] = newObj[k];

					if (typeof origV === 'object' && typeof newV === 'object') {

						for (kk in newV) {

							if (newV.hasOwnProperty(kk)) {

								origV[kk] = newV[kk];

							}

						}

					}
		
				}
		
			}
		
		},

		/**
		 * use array.prototype.forEach on nodelists
		 */ 
		forEach: window.Array.prototype.forEach,

		/**
		 * debounce function
		 * http://davidwalsh.name/javascript-debounce-function
		 */ 
		debounce: (func, wait, immediate) => {
		
			var timeout;
		
			return function() {
		
				var context = this;
				var args = arguments;
		
				var later = function() {
					timeout = null;
					if (!immediate) {
						func.apply(context, args);
					}
				};
		
				var callNow = immediate && !timeout;
		
				clearTimeout(timeout);
		
				timeout = setTimeout(later, wait);
		
				if (callNow) {
		
					func.apply(context, args);
		
				}
		
			};
		
		},

		/**
		 * map values of object to array
		 */
		values: (obj) => {
		
			var array = [];
		
			for (var prop in obj) {
		
				if (obj.hasOwnProperty(prop)) {
		
					array.push(obj[prop]);
		
				}
		
			}
		
			return array;
		
		},

		/**
		 * create shorter alias for QSA
		 */
		qsa: document.querySelectorAll.bind(document),

		/**
		 * strip brackets from attribute selectors
		 * for getting the actual attribute
		 * using element.getAttribute()
		 */
		stripBrackets: (att) => {
		
			return att.replace('[', '').replace(']', '');
		
		},
		
		/**
		 * capitalize first letter of string
		 */
		capitalize: (str) => {
		
			return str.charAt(0).toUpperCase() + str.slice(1);
		
		},

		/**
		 * check if child is descendent of parent
		 * http://stackoverflow.com/questions/2234979/how-to-check-in-javascript-if-one-element-is-contained-within-another
		 */
		isDescendant: (parent, child) => {
		
			var node = child.parentNode;
		
			while (node !== null) {
		
				if (node === parent) {
		
					return true;
		
				}
		
				node = node.parentNode;
		
			}
		
			return false;
		
		},

		/**
		 * for those special times
		 * when you just really wanna do nothing
		 */
		noop: () => {},

		/**
		 * for in loop
		 * check if object has prop
		 */
		forIn: (obj, cb) => {
			
			var prop;

			for (prop in obj) {
			
				if (obj.hasOwnProperty(prop)) {

					cb(prop, obj);

				}
			
			}
	
		}
	
	};

})(window.target = window.target || {});