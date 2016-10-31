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
    }
};