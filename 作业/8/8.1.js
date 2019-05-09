var $picLi = $(".box .pic li");
var $tabLi = $(".box .tab li");
var $btnLi = $(".box .btn li");
var len = ($picLi.length);
var first = 0;  // 用于存放定义当前元素的下标、
var timer;  //定时器

// 初始化
$tabLi.eq(0).addClass("on");
$picLi.eq(0).show();

// tab区域
$tabLi.click(function () {
    var x = $(this).index();  // 获取到点击的元素的下标
    if (x != first) {  // 如果点击的元素，不是当前元素时，才执行淡入淡出
        change(x);
    }
});

// 按钮区域
$btnLi.click(function () {
    var x = first;  // 获取到的是当前的元素位置，下标值
    if ($(this).index()) {
        x++;
        x %= len;
    } else {
        x--;
        x %= len;
    }
    change(x);  // 不管真还是假，都要执行change函数，所以写在if外面。
});


auto();  // 自己一个人执行去就完了，不用管控

// 滑入鼠标清除定时器
$(".box").hover(function () {
    clearInterval(timer);
}, auto);
// 为了使移开鼠标后继续轮播，在函数结束后，再次调用执行auto函数
// 不能加()， 加上括号，会上面和下面的auto一起执行，就乱了

// 自动轮播
function auto() {
    timer = setInterval(function () {
        var x = first;
        x++;
        x %= len;
        change(x);

    }, 3000)
}

// 淡入淡出显示函数
function change(i) {
    $tabLi.eq(first).removeClass("on");  // 移除class的on
    $picLi.eq(first).fadeOut(1000);
    first = i;
    $tabLi.eq(first).addClass("on");
    $picLi.eq(first).fadeIn(1000);

}