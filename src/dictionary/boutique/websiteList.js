import juejin from '../../assets/img/boutique/websiteList/juejin.png';
import w3school from '../../assets/img/boutique/websiteList/w3school.png';
import w3cplus from '../../assets/img/boutique/websiteList/w3cplus.png';
import runoob from '../../assets/img/boutique/websiteList/runoob.png';
import awesomes from '../../assets/img/boutique/websiteList/awesomes.png';
import kancloud from '../../assets/img/boutique/websiteList/kancloud.png';

export const websiteList = () => {
    let websiteList = [
        {
            name: "菜鸟教程",
            logo: runoob,
            href: "https://www.runoob.com/",
            describe: "菜鸟教程提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。 同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习编程",
            technology: ['基础技术', '技术教程'],
            gitHub: '',
            time: '2020-02-02'
        }, {
            name: "W3School",
            logo: w3school,
            href: "https://www.w3school.com.cn/",
            describe: "在 W3School，你可以找到你所需要的所有的网站建设教程,从基础的 HTML 到 CSS，乃至进阶的 XML、SQL、JS、PHP 和 ASP.NET",
            technology: ['基础技术', '技术教程'],
            gitHub: '',
            time: '2020-02-02'
        }, {
            name: "w3cplus",
            logo: w3cplus,
            href: "https://www.w3cplus.com/",
            describe: "w3cplus提供了大量的CSS，HTML5,JavaScript，Vue，React等最新前端技术文章，以一起学习进步，共同分享为原则，为打造优秀的前端学习教程而努力",
            technology: ['技术文章', '技术教程'],
            gitHub: '',
            time: '2020-02-02'
        }, {
            name: "awesomes",
            logo: awesomes,
            href: "https://www.awesomes.cn/",
            describe: "Awesomes-Web前端开发资源库",
            technology: ['技术资源', '技术博客'],
            gitHub: '',
            time: '2020-02-02'
        }, {
            name: "看云（kancloud）",
            logo: kancloud,
            href: "https://www.kancloud.cn/special",
            describe: "看云专注于文档的在线创作、协作、分享和托管服务，致力于提供最佳的在线创作和阅读体验，让企业和个人可以更方便地发布和管理自己的文档。",
            technology: ['技术文档', '文档分享'],
            gitHub: '',
            time: '2020-02-02'
        }, {
            name: "掘金",
            logo: juejin,
            href: "https://juejin.im/",
            describe: "一个帮助开发者成长的社区屏",
            technology: ['技术社区', '技术博客'],
            gitHub: '',
            time: '2020-02-02'
        },
    ];
    return websiteList;
};
