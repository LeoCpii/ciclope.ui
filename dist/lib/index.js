(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lizard", [], factory);
	else if(typeof exports === 'object')
		exports["lizard"] = factory();
	else
		root["lizard"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
class Lizard {
    constructor() { }
    ;
    get mode() {
        return this._mode;
    }
    get brand() {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }
    get accent() {
        return getComputedStyle(document.documentElement).getPropertyValue('--accent');
    }
    get colors() {
        return {
            brand: getComputedStyle(document.documentElement).getPropertyValue('--brand').trim(),
            accent: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(),
            color: getComputedStyle(document.documentElement).getPropertyValue('--color').trim(),
            text: getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
            emphasis: getComputedStyle(document.documentElement).getPropertyValue('--emphasis').trim(),
            red: getComputedStyle(document.documentElement).getPropertyValue('--danger').trim(),
            green: getComputedStyle(document.documentElement).getPropertyValue('--success').trim(),
            blue: getComputedStyle(document.documentElement).getPropertyValue('--info').trim(),
            yellow: getComputedStyle(document.documentElement).getPropertyValue('--warning').trim(),
            opacity: {
                emphasis: getComputedStyle(document.documentElement).getPropertyValue('--emphasis--opacity').trim(),
                red: getComputedStyle(document.documentElement).getPropertyValue('--danger--opacity').trim(),
                green: getComputedStyle(document.documentElement).getPropertyValue('--success--opacity').trim(),
                blue: getComputedStyle(document.documentElement).getPropertyValue('--info--opacity').trim(),
                yellow: getComputedStyle(document.documentElement).getPropertyValue('--warning--opacity').trim()
            }
        };
    }
    cleanThemes() {
        const arr = document.getElementsByTagName('BODY')[0].classList;
        const length = arr.length;
        for (let index = 0; index < length; index++) {
            const isNotMode = !Lizard.modes.includes(arr[index]);
            if (isNotMode) {
                arr.remove(arr[index]);
            }
        }
    }
    cleanModes() {
        const arr = document.getElementsByTagName('BODY')[0].classList;
        const length = arr.length;
        for (let index = 0; index < length; index++) {
            const isNotMode = Lizard.modes.includes(arr[index]);
            if (isNotMode) {
                arr.remove(arr[index]);
            }
        }
    }
    setMode(mode) {
        this.cleanModes();
        document.getElementsByTagName('BODY')[0].classList.add(mode);
    }
    setBrand(color) {
        const root = document.documentElement;
        root.style.setProperty('--brand', color);
    }
    setaccent(color) {
        const root = document.documentElement;
        root.style.setProperty('--accent', color);
    }
    setTheme(theme) {
        this.cleanThemes();
        if (theme !== 'default') {
            document.getElementsByTagName('BODY')[0].classList.add(theme);
        }
    }
}
Lizard.themes = ['default', 'micrablepharus', 'vanzosaura', 'custom'];
Lizard.modes = ['dark', 'light'];
exports["default"] = Lizard;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQWE7UUFDMUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FBRTtJQUMvRixDQUFDOztBQWxGTSxhQUFNLEdBQWEsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3pFLFlBQUssR0FBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQW9GOUMscUJBQWUsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl6YXJkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9saXphcmQvLi9zcmMvbGliL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGl6YXJkXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxpemFyZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsaXphcmRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgdHlwZSBUTW9kZSA9ICdsaWdodCcgfCAnZGFyayc7XHJcbmV4cG9ydCB0eXBlIFRUaGVtZSA9ICdkZWZhdWx0JyB8ICdtaWNyYWJsZXBoYXJ1cycgfCAndmFuem9zYXVyYScgfCAnY3VzdG9tJztcclxuXHJcbmNsYXNzIExpemFyZCB7XHJcbiAgICBzdGF0aWMgdGhlbWVzOiBUVGhlbWVbXSA9IFsnZGVmYXVsdCcsICdtaWNyYWJsZXBoYXJ1cycsICd2YW56b3NhdXJhJywgJ2N1c3RvbSddO1xyXG4gICAgc3RhdGljIG1vZGVzOiBUTW9kZVtdID0gWydkYXJrJywgJ2xpZ2h0J107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH07XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9kZTogVE1vZGU7XHJcblxyXG4gICAgcHVibGljIGdldCBtb2RlKCk6IFRNb2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGJyYW5kKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJyYW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhY2NlbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tYWNjZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb2xvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYnJhbmQ6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJyYW5kJykudHJpbSgpLFxyXG4gICAgICAgICAgICBhY2NlbnQ6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWFjY2VudCcpLnRyaW0oKSxcclxuICAgICAgICAgICAgY29sb3I6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWNvbG9yJykudHJpbSgpLFxyXG4gICAgICAgICAgICB0ZXh0OiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS10ZXh0JykudHJpbSgpLFxyXG4gICAgICAgICAgICBlbXBoYXNpczogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tZW1waGFzaXMnKS50cmltKCksXHJcbiAgICAgICAgICAgIHJlZDogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tZGFuZ2VyJykudHJpbSgpLFxyXG4gICAgICAgICAgICBncmVlbjogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tc3VjY2VzcycpLnRyaW0oKSxcclxuICAgICAgICAgICAgYmx1ZTogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0taW5mbycpLnRyaW0oKSxcclxuICAgICAgICAgICAgeWVsbG93OiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS13YXJuaW5nJykudHJpbSgpLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBoYXNpczogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tZW1waGFzaXMtLW9wYWNpdHknKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICByZWQ6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWRhbmdlci0tb3BhY2l0eScpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgIGdyZWVuOiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1zdWNjZXNzLS1vcGFjaXR5JykudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgYmx1ZTogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0taW5mby0tb3BhY2l0eScpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgIHllbGxvdzogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0td2FybmluZy0tb3BhY2l0eScpLnRyaW0oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYW5UaGVtZXMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0JPRFknKVswXS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpc05vdE1vZGUgPSAhTGl6YXJkLm1vZGVzLmluY2x1ZGVzKGFycltpbmRleF0gYXMgVE1vZGUpO1xyXG4gICAgICAgICAgICBpZiAoaXNOb3RNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucmVtb3ZlKGFycltpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYW5Nb2RlcygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQk9EWScpWzBdLmNsYXNzTGlzdDtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBhcnIubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm90TW9kZSA9IExpemFyZC5tb2Rlcy5pbmNsdWRlcyhhcnJbaW5kZXhdIGFzIFRNb2RlKTtcclxuICAgICAgICAgICAgaWYgKGlzTm90TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgYXJyLnJlbW92ZShhcnJbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TW9kZShtb2RlOiBUTW9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYW5Nb2RlcygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdCT0RZJylbMF0uY2xhc3NMaXN0LmFkZChtb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QnJhbmQoY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1icmFuZCcsIGNvbG9yKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRhY2NlbnQoY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hY2NlbnQnLCBjb2xvcilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGhlbWUodGhlbWU6IFRUaGVtZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYW5UaGVtZXMoKTtcclxuICAgICAgICBpZiAodGhlbWUgIT09ICdkZWZhdWx0JykgeyBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQk9EWScpWzBdLmNsYXNzTGlzdC5hZGQodGhlbWUpOyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpemFyZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=