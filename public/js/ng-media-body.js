var appImessage = angular.module('imessage',[]);

appImessage.run(function($templateCache){
    $templateCache.put('tpl.html','lllllllllllll');
});
appImessage.controller('ImessageDataCtrl',['$scope','$element',function($scope,$element){
    var url = 'http://192.168.1.100:3000/getContent';

    $.getJSON(url,function(data){
        console.log(data);
    });


    $scope.mediaContent = {
            title:'I DO',
            auth:'yuanlin.su',
            createTime:'2014-12-1',
            tags:'爱你',
            imgurl:'image/myrc.jpg',
            content:'因为我那么爱你，所以你一定懂我所未言。'+
                '因为我太过在乎你，怕将你的生活搅的一团糟。' +
                '因为你总是那么关心我，我怎么能让自己拖你后腿。' +
                '我们相处的不温不火，一不小心就会天长地久。' +
                '爱情不是我知道我爱你，而是我相信你爱我。' +
                '责任不是因为我说了一句 I Do，而是因为当初要手牵手走完一生的勇气和决心。' +
                '信任不是我们的关系，而是因为你是独一无二能让我放下戒备的那个人.',
            articleId:'IDOIJUST'
        };
}]);
appImessage.directive('media',function(){
    return{
        restrict:'EA',
        template:'<div class="panel panel-default">' +
                     '<div class="panel-heading">{{mediaContent.title}}</div>' +
                     '<div class="panel-body"><p>作者：{{mediaContent.auth}}&nbsp;&nbsp;&nbsp;&nbsp;创建时间：{{mediaContent.createTime}}&nbsp;&nbsp;&nbsp;&nbsp;标签：{{mediaContent.tags}}</p></div>' +
                     '<div class="row tpl-bottom-5">' +
                        '<div class="col-md-4"><img ng-src="{{mediaContent.imgurl}}" class="tpl-left-15" style="max-height: 500px;max-width: 336px" /></div>' +
                        '<div class="col-md-8"><span class="divPre">&nbsp;&nbsp;&nbsp;&nbsp;{{mediaContent.content}}</span> </div>' +
                     '</div>' +
                    '</div>',
        replace:true
    };
});