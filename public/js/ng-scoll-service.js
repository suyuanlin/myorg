var appImessage = angular.module('imessage',[]);
/**
 * 注册服务，实现瀑布流
 */
appImessage.factory('scollService', function(){
    var $window = $(window);
    return {
        scrollHeight: function(){
            return $window.height() + $window.scrollTop();
        },

        //when scoll height above the selector height, the callback will be trigger
        bindSelector: function(selector, callback){
            var self = this;
            $window.on('scroll', function(evt){
                var o = $(selector).offset();
                if(o && o.top < self.scrollHeight()){
                    callback();
                }
            });
        },

        //when scoll is change, the callback will be trigger
        bindTop: function(callback){
            $window.on('scroll', function(evt){
                callback(evt);
            });
        }
    };
});