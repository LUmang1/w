//$是顶级元素$.fn. 名称空间
$. fn. tabGroup=function(){
$(this). addClass("active");
$( this). siblings("li") . removeClass("active");
var index=$( this). index();
$(this) . parent() . siblings(). children("div:eq("+index+")") . addClass("select")
$(this). parent() . siblings() . children("div :eq("+index+")"). siblings("div"). removeClass("select")
}
