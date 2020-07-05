// 當頁面 準備完成時
$(document).ready(function () {

    // 當視窗 捲動時
    $(window).scroll(function () {

        $("*").each(function (indexInArray, valueOfElement) {

            // var 變數 = 資料
            var offset = $(this).offset();       // 取得元素位移資料
            var top = offset.top;                   // 上方

            var windowTop = $(window).scrollTop();

            var number = $(this).attr("data-bytim-number");
            var duration = $(this).attr("data-bytim-duration");
            var offset = $(this).attr("data-bytim-offset");

            if (windowTop > top - offset) {

                // 選取.動畫({參數}，{選項})
                $(this).animate({
                    num: number                                       // 數字
                }, {
                    duration: parseInt(duration),                             // 時間
                    step: (now) => {                            // 步驟
                        $(this).text(Math.floor(now));       // 文字(步驟) - Math.floor() 去小數點
                    }
                })
            }
        });

    });
});
