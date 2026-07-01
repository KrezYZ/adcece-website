{
    // 将#time的text设置成当前时间
    function setTime() {
        // document.getElementById("time").innerHTML = new Date().toLocaleString();
        let s = new Date().toLocaleTimeString();
        s = s.substring(0, s.length - 3);
        // 只取时间部分，24小时记时法
        document.getElementById("time").innerHTML = s;
    }

    setInterval(setTime, 1000);

    let phoneShowBasePath = "https://test.kantboot.com";

    let phoneShowList = [
        // {
        //     id: 2,
        //     url: `./paypal.html`,
        //     name: "需求精准匹配",
        //     description: "利用中欧中小企业合作区（如太仓）、跨境电商综试区等平台，实现技术与需求的对接。",
        //     isShow: true
        // },
        // {
        //     id: 3,
        //     url: `./live.html`,
        //     name: "数字化赋能",
        //     description: "引导欧洲企业利用中国的直播电商、云服务等数字工具开拓市场。",
        //     isShow: true
        // },
        // {
        //     id: 1,
        //     url: `./1.html`,
        //     name: '软着陆”服务',
        //     description: '提供免费的前期市场咨询、法律人力资源指南，并协助解决从官网建设到舆情管理等一系列营销问题。',
        //     isShow: true
        // },
        // {
        //     id: 5,
        //     url: "./no.html",
        //     name: "商城",
        //     description: "一级分销、二级分销、积分、提现、优惠券、秒杀、拼团、砍价、多店铺、多商户、多供应商、多仓库、多配送方式、多支付方式、多语言、多货币、多模板...",
        //     isShow: false
        // },
        // {
        //     id: 6,
        //     url: "./no.html",
        //     name: "远程桌面控制",
        //     description: "双方都需要安装APP，且需要被控制方授权，非窃听。",
        //     isShow: false
        // },
        // {
        //     id: 7,
        //     url: "./no.html",
        //     name: "股票基金展示与模拟交易",
        //     description: "",
        //     isShow: false
        // },
        // {
        //     id: 8,
        //     url: "./no.html",
        //     name: "模型训练辅助APP",
        //     description: "如昆虫中的专业研究...",
        //     isShow: false
        // }
    ];

    let phoneShowDemoEl = document.getElementById("phoneShowDemo");

    function selectPhoneShowDemo(i) {
        document.getElementById('time').style.filter = "invert(0)";
        document.getElementById("status").style.filter = "invert(0)";
        document.getElementById("iframePhoneDemo").src = phoneShowList[i].url;
        // 获取所有.box-c-item
        let boxCItem = document.getElementsByClassName("box-c-item");
        for (let j = 0; j < boxCItem.length; j++) {
            boxCItem[j].className = "box-c-item";
        }

        document.getElementById("phoneShowDemoItem" + i).className = "box-c-item box-c-item-selected";

        document.getElementById("iframePhoneDemo2").innerHTML = `
            <div style="padding: 0 30px 0 30px;">
            <div style="font-size: 32rpx;font-weight: bold;color: #FFFFFF">
                ${ phoneShowList[i].name }
            </div>
            <div style="font-size: 26rpx;color: #f0f0f0;">
                ${ phoneShowList[i].description }
            </div>
            <div style="height: 10rpx"></div>
            <div v-if="!selected.isShow" style="font-size: 24rpx;color: #FFFFFF;">
                ${ phoneShowList[i].isShow ? '' : '[不支持预览]' }
            </div>            
            </div>

            
            ${i==0? '':'<img style="width: 20px;height: 20px;position: absolute;left: 10px;top:50%;transform: translateY(-50%);" src="./image/left.svg" onclick="selectPhoneShowDemo('+(i-1)+')" />'}
            ${i>=phoneShowList.length-1? '':'<img style="width: 20px;height: 20px;position: absolute;right: 10px;top:50%;transform: translateY(-50%) rotate(180deg);" src="./image/left.svg"  onclick="selectPhoneShowDemo('+(i-(-1))+')" />'}
        
        `;

    }

    let phoneShowDemoHtml = "";
    for (let i = 0; i < phoneShowList.length; i++) {
        let item = phoneShowList[i];
        phoneShowDemoHtml += `
            <div
            onclick="selectPhoneShowDemo(${i})"
            id="phoneShowDemoItem${i}"
            ${item.isShow ? '' : 'style="opacity: .5;cursor: not-allowed;"'}
            class="box-c-item">
                  <div class="box-c-item-name">
                            ${item.name}
                        </div>
                        <div style="height: 5px"></div>
                        <div class="box-c-item-description">${item.description}
                        </div>
                        <div
                        ${item.isShow ? 'style="display: none' : '"'}
                        class="box-c-item-is-show">
                            ${item.isShow ? '' : '[不支持预览]'}
                        </div>
                    </div>
        `;
    }
    document.querySelector('#phoneShowDemo').innerHTML = phoneShowDemoHtml;

    selectPhoneShowDemo(0);

}

// 获取滚动条位置
function getScrollTop() {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

function initIframePhoneDemo2() {
    let scrollTop = getScrollTop();
    // 获取#demoShow元素的位置
    let demoShow = document.getElementById("demoShow");
    let demoShowTop = demoShow.offsetTop;
    // iframePhoneDemo2
    if (scrollTop > demoShowTop && scrollTop < demoShowTop + 400) {
        document.getElementById("iframePhoneDemo2").style.display = "block";
    } else {
        document.getElementById("iframePhoneDemo2").style.display = "none";
    }
}

initIframePhoneDemo2();

// 监听滚动条位置
window.onscroll = function () {
    initIframePhoneDemo2();
};

window.addEventListener("message", function (event) {
    if(event.data.indexOf("changeStatus:") === -1){
        return;
    }
    if (event.data === "changeStatus:white") {
        document.getElementById('time').style.filter = "invert(1)";
        document.getElementById("status").style.filter = "invert(1)";
    }else {
        document.getElementById('time').style.filter = "invert(0)";
        document.getElementById("status").style.filter = "invert(0)";
    }
})