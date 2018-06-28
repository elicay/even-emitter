var event = (function (params) {
    var evt = {};
    return {
        emit: function (eventName, data) {
            if (evt[eventName]) {
                for (var i = 0; i < evt[eventName].length; i++) {
                   evt[eventName][i](data);
                }
            }
        },
        on: function (eventName, callback) {
            if (evt[eventName]) {
                evt[eventName].push(callback)
                return ;
            }

            evt[eventName] = [callback];
        }
    }
})();