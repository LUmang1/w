$(function() {

    //京东快报，获取json中的数据    
    $.getJSON("index.json", function(data) {
        $(".mTextUl").get(0).innerHTML = ''; //清空数据先
        console.log(data.JDNews);
        for (var i = 0; i < 4; i++) {
            var st2 = data.JDNews[i].substring(0, 2);
            var st3 = data.JDNews[i].substring(2);
            var mtli = "<li><a href='jacascript:;'><span>" + st2 + "</span>" + st3;
            $(".mTextUl").append(mtli);
        }
    })

    // //京东快报下的图标动态添加
    // var mttUl = doucment.quertSelector('mttUl');
    // var mttlis = mttUl.quertSelector('li');
    // var topp = 0;
    // var left = 0;
    // for (var i = 0; i < mttlis.length; i++) {

    // }

})