/**
 * 
 * 返回工具方法库
 * @export
 */
export default {
    extend: function(obj) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < args.length; i++) {
            var source = args[i];
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        }
        return obj;
    },
    nextUid: function() {
        return 'ion' + (nextId++);
    },
    /**
     * Only call a function once in the given interval.
     *
     * @param func {Function} the function to call
     * @param wait {int} how long to wait before/after to allow function calls
     * @param immediate {boolean} whether to call immediately or after the wait interval
     */
    debounce: function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function() {
            context = this;
            args = arguments;
            timestamp = new Date();
            var later = function() {
                var last = (new Date()) - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) result = func.apply(context, args);
            return result;
        };
    },

    /**
     * Throttle the given fun, only allowing it to be
     * called at most every `wait` ms.
     */
    throttle: function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
        };
        return function() {
            var now = Date.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    },
    // Borrowed from Backbone.js's extend
    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    inherit: function(protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function() {
                return parent.apply(this, arguments);
            };
        }

        // Add static properties to the constructor function, if supplied.
        ionic.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function() {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) ionic.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
    },
    /**
     * 
     * 判断css 是否存在 在dom 节点
     * @param {any} el Document
     * @param {any} cls css 类名
     */
    hasClass(el, cls) {
        //获取class 内容
        let elClass = el.className;
        //通过split空字符将cls转换成数组
        let arrElCls = elClass.split(/\s+/);
        return arrElCls.indexOf(cls) != -1;
    },

    /**
     * 
     * 添加 class
     * @param {any} el
     * @param {any} cls
     */
    addClass(el, cls) {
        //获取 class 内容
        let elClass = el.className;
        //判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
        let blank = (elClass != '') ? ' ' : '';
        el.className = elClass + blank + cls;
    },

    /**
     * 
     * 移除class
     * @param {any} el
     * @param {any} cls
     */
    removeClass(el, cls) {
        //获取 class 内容, 并在首尾各加一个空格. ex) 'abc        bcd' -> ' abc        bcd '
        let elClass = ` ${el.className} `;
        //将多余的空字符替换成一个空格. ex) ' abc        bcd ' -> ' abc bcd '
        elClass = elClass.replace(/(\s+)/gi, ' ');
        //在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
        let removed = elClass.replace(` ${cls} `, ' ');
        //去掉首尾空格. ex) 'bcd ' -> 'bcd'
        removed = removed.replace(/(^\s+)|(\s+$)/g, '');
        //替换原来的 class.
        el.className = removed;
    }

};