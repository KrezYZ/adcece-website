let staffMemberArr = [
    {
        name: '与中国政府沟通',
        profession: '·',
        img: "./image/LiXiaoxin.png",
        info: '重点推介西班牙、匈牙利、德国等热点投资区域，分析其产业生态与政策优势。。'
    },
    {
        name: '与西班牙政府沟通',
        profession: '·',
        img: "./image/LiXiaoxin.png",
        info: '重点推介西班牙、匈牙利、德国等热点投资区域，分析其产业生态与政策优势。。'
    },
    {
        name: '舆情得到控制',
        profession: '·',
        img: "./image/LiXiaoxin.png",
        info: '在某年某月帮某个企业发生了什么，帮助这个企业彻底控制住了舆情。'
    },
    {
        name: '舆情得到控制',
        profession: '·',
        img: "./image/LiXiaoxin.png",
        info: '在某年某月帮某个企业发生了什么，帮助这个企业彻底控制住了舆情。'
    },
    {
        name: '舆情得到控制',
        profession: '·',
        img: "./image/LiXiaoxin.png",
        info: '在某年某月帮某个企业发生了什么，帮助这个企业彻底控制住了舆情。'
    },
    {
        name: '舆情得到控制',
        profession: '·',
        img: "./image/LiXiaoxin.png",
        info: '在某年某月帮某个企业发生了什么，帮助这个企业彻底控制住了舆情。'
    },
]

// 获取所有#staffMember元素
const staffMemberElems = document.querySelectorAll("#staffMemberBody");
let html = "";
for (let i = 0; i < staffMemberArr.length; i++) {
    let item = staffMemberArr[i];
    console.log(item);
    html += `
        <div class="staff-member-box">
                <div class="staff-member-img-box">
                    <img class="staff-member-img" src="${item.img}">
                </div>
                <div class="staff-member-info-box">
                    <div class="staff-member-name">
                        <span class="staff-member-name-span">${item.name}</span>
                        <div class="staff-member-name-profession">
                            <div class="staff-member-name-profession-line"></div>
                            <span class="staff-member-name-profession-text">${item.profession}</span>
                        </div>
                    </div>
                    <div>
                        <div class="staff-member-info" style="width: 100%">
                                ${item.info}
                        </div>
                    </div>
                </div>
        </div>
        `;
}

document.getElementById("staffMemberBody").innerHTML = html;



//
// // 获取所有.staff-member-box，变成围着转地球的动画
// const staffMemberBoxElems = document.querySelectorAll(".staff-member-box");
// const container = document.getElementById("staffMemberBody");
//
// // 获取容器尺寸
// let containerWidth = container.offsetWidth;
// let containerHeight = container.offsetHeight;
//
// // 设置更大的旋转半径
// let radius = Math.min(containerWidth, containerHeight) * 0.3; // 使用容器尺寸的30%作为半径
//
// // 全部变成绝对定位
// for (let i = 0; i < staffMemberBoxElems.length; i++) {
//     staffMemberBoxElems[i].style.position = "absolute";
//     // staffMemberBoxElems[i].style.transition = "all 1s";
//     staffMemberBoxElems[i].style.transformOrigin = "center center";
//     staffMemberBoxElems[i].style.zIndex = staffMemberBoxElems.length - i;
//
//     // 当前zIndex
//     let zIndex = staffMemberBoxElems[i].style.zIndex + "";
//     // 当前scale
//     let scale = staffMemberBoxElems[i].style.transform + "";
//
//     // 监听.staff-member-box的鼠标进入事件和鼠标离开事件
//     staffMemberBoxElems[i].addEventListener("mouseenter", () => {
//         mouseInStaffMember = true;
//         staffMemberBoxElems[i].style.transform = "scale(1.5)";
//         staffMemberBoxElems[i].style.zIndex = 100;
//     });
//
//     staffMemberBoxElems[i].addEventListener("mouseleave", () => {
//         mouseInStaffMember = false;
//         staffMemberBoxElems[i].style.transform = scale;
//         staffMemberBoxElems[i].style.zIndex = zIndex;
//     });
// }
//
// let mouseInStaffMember = false;
//
// let index = 0;
// setInterval(() => {
//     if (mouseInStaffMember) {
//         return;
//     }
//
//     // 获取容器尺寸
//     let containerWidth = container.offsetWidth;
//     let containerHeight = container.offsetHeight;
//
//     // 设置更大的旋转半径
//     let radius = Math.min(containerWidth, containerHeight) * 0.3; // 使用容器尺寸的30%作为半径
//     const isMobile = window.innerWidth <= 768;
//
//     if (isMobile) {
//         // 手机模式：调整旋转半径和速度
//         radius = Math.min(container.offsetWidth, container.offsetHeight) * 0.2;
//         // 可以调整旋转速度等参数
//     } else {
//         // 桌面模式：使用原来的设置
//         radius = Math.min(container.offsetWidth, container.offsetHeight) * 0.3;
//     }
//     for (let i = 0; i < staffMemberBoxElems.length; i++) {
//         let angle = (i * 360 / staffMemberBoxElems.length + index) % 360;
//         let x = radius * Math.cos(angle * Math.PI / 180);
//
//         let y = radius * Math.sin(angle * Math.PI / 180 - radius / 10) * 0.5; // y轴压缩为原来的一半
//
//         // 将旋转中心设置在容器中心
//         staffMemberBoxElems[i].style.left = (x + containerWidth / 2 - 100) + "px";
//         staffMemberBoxElems[i].style.top = (y + containerHeight / 2) + "px";
//
//         // 根据y值调整大小和透明度
//         let scale = (y + radius) / (2 * radius) + 0.5;
//         staffMemberBoxElems[i].style.transform = "scale(" + scale + ")";
//         staffMemberBoxElems[i].style.zIndex = Math.floor(scale * 100);
//     }
//     index += 2;
//     if (index >= 360) {
//         index = 0;
//     }
//
// }, 50) // 将间隔时间从1ms改为50ms，使动画更流畅



