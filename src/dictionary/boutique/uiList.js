import viewUi from '../../assets/img/boutique/uiList/viewUi.png';
import iViewUi from '../../assets/img/boutique/uiList/iViewUi.png';
import ElementUi from '../../assets/img/boutique/uiList/ElementUi.svg';
import MintUI from '../../assets/img/boutique/uiList/MintUI.svg';
import VantUI from '../../assets/img/boutique/uiList/VantUI.png';
import AntDesignUI from '../../assets/img/boutique/uiList/AntDesignUI.svg';
import WeUI from '../../assets/img/boutique/uiList/WeUI.jpg';
import BootstrapUi from '../../assets/img/boutique/uiList/BootstrapUi.jpg';
import MUi from '../../assets/img/boutique/uiList/MUi.png';
import UniAppUi from '../../assets/img/boutique/uiList/UniAppUi.png';

export const uiList = () => {
    let uiList = [
        {
            name: "View UI",
            logo: viewUi,
            href: "https://www.iviewui.com/docs/introduce",
            describe: "View UI，即原先的 iView，是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品",
            technology: ['PC', 'Vue'],
            gitHub: 'https://github.com/view-design/ViewUI',
            time: '2020-02-02'
        }, {
            name: "iView-weapp",
            logo: iViewUi,
            href: "https://weapp.iviewui.com/",
            describe: "一套高质量的微信小程序 UI 组件库",
            technology: ['小程序', 'Vue'],
            gitHub: 'https://github.com/TalkingData/iview-weapp',
            time: '2020-02-02'
        }, {
            name: "Element UI",
            logo: ElementUi,
            href: "https://element.eleme.cn/#/zh-CN/component/installation",
            describe: "一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",
            technology: ['PC', 'Vue'],
            gitHub: 'https://github.com/ElemeFE/element',
            time: '2020-02-02'
        }, {
            name: "Element-react",
            logo: ElementUi,
            href: "https://elemefe.github.io/element-react/index#/zh-CN/quick-start",
            describe: "一套为开发者、设计师和产品经理准备的基于 React 开发的桌面端组件库",
            technology: ['PC', 'React'],
            gitHub: 'https://github.com/ElemeFE/element-react',
            time: '2020-02-02'
        }, {
            name: "Element-angular",
            logo: ElementUi,
            href: "https://element-angular.faas.ele.me/guide/install",
            describe: "一套为开发者、设计师和产品经理准备的基于 Angular 开发的桌面端组件库",
            technology: ['PC', 'Angular'],
            gitHub: 'https://github.com/ElemeFE/element-angular',
            time: '2020-02-02'
        }, {
            name: "Mint UI",
            logo: MintUI,
            href: "https://element-angular.faas.ele.me/guide/install",
            describe: "基于 Vue.js 的移动端组件库",
            technology: ['App', 'Vue'],
            gitHub: 'https://github.com/ElemeFE/element-angular',
            time: '2020-02-02'
        }, {
            name: "Vant",
            logo: VantUI,
            href: "https://youzan.github.io/vant/#/zh-CN/",
            describe: "轻量、可靠的移动端 Vue 组件库",
            technology: ['App', 'Vue'],
            gitHub: 'https://github.com/youzan/vant',
            time: '2020-02-02'
        }, {
            name: "Vant Weapp",
            logo: VantUI,
            href: "https://youzan.github.io/vant-weapp/#/intro",
            describe: "Vant Weapp 是移动端 Vue 组件库 Vant 的小程序版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用",
            technology: ['小程序', 'Vue'],
            gitHub: 'https://github.com/youzan/vant-weapp',
            time: '2020-02-02'
        }, {
            name: "Ant-Design",
            logo: AntDesignUI,
            href: "https://ant.design/index-cn",
            describe: "企业级产品设计体系，创造高效愉悦的工作体验",
            technology: ['PC', 'Vue'],
            gitHub: 'https://github.com/ant-design/ant-design',
            time: '2020-02-02'
        }, {
            name: "WeUI",
            logo: WeUI,
            href: "https://weui.io/",
            describe: "WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一",
            technology: ['小程序'],
            gitHub: 'https://github.com/Tencent/weui',
            time: '2020-02-02'
        }, {
            name: "Bootstrap",
            logo: BootstrapUi,
            href: "https://v3.bootcss.com/components/",
            describe: "Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目",
            technology: ['PC', 'App','HTML','CSS'],
            gitHub: 'https://github.com/twbs/bootstrap',
            time: '2020-02-02'
        }, {
            name: "Mui",
            logo: MUi,
            href: "https://dev.dcloud.net.cn/mui/",
            describe: "最接近原生APP体验的高性能前端框架",
            technology: ['App','HTML','CSS'],
            gitHub: 'https://github.com/dcloudio/mui',
            time: '2020-02-02'
        }, {
            name: "Uni-app",
            logo: UniAppUi,
            href: "https://uniapp.dcloud.io/",
            describe: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台",
            technology: ['小程序','HTML','CSS'],
            gitHub: 'https://github.com/dcloudio/uni-app',
            time: '2020-02-02'
        }
    ];
    return uiList;
};
