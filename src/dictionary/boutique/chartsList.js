import Echarts from '../../assets/img/boutique/chartList/echarts.jpeg';
import HighCharts from '../../assets/img/boutique/chartList/HighCharts.svg';
import D3 from '../../assets/img/boutique/chartList/D3.png';
import Threejs from '../../assets/img/boutique/chartList/Threejs.png';
import vcharts from '../../assets/img/boutique/chartList/vcharts.png';
import vueCharts from '../../assets/img/boutique/chartList/vueCharts.png'

export const chartsList = () => {
    let chartsList = [
        {
            name: "Echarts",
            logo: Echarts,
            href: "https://echarts.apache.org/zh/index.html",
            describe: "涵盖各行业图表，满足各种需求，多设备随意展示：电脑／手机／平板／大屏",
            technology: ['JS', 'charts'],
            gitHub: 'https://github.com/apache/incubator-echarts',
            time: '2020-02-02'
        }, {
            name: "HighCharts",
            logo: HighCharts,
            href: "https://www.highcharts.com.cn",
            describe: "兼容 IE6+、完美支持移动端、图表类型丰富、方便快捷的 HTML5 交互性图表库",
            technology: ['JS', 'charts'],
            gitHub: 'https://github.com/hcharts/highcharts',
            time: '2020-02-02'
        }, {
            name: "D3",
            logo: D3,
            href: "https://d3js.org/",
            describe: "通过SVG，Canvas和HTML使数据栩栩如生",
            technology: ['JS', 'Canvas', 'SVG'],
            gitHub: 'https://github.com/d3/d3',
            time: '2020-02-02'
        }, {
            name: "Threejs",
            logo: Threejs,
            href: "https://threejs.org/",
            describe: "JavaScript 3D库",
            technology: ['JS', '3d'],
            gitHub: 'https://github.com/mrdoob/three.js',
            time: '2020-02-02'
        },{
            name: "v-charts",
            logo: vcharts,
            href: "https://v-charts.js.org",
            describe: "基于 Vue2.0 和 ECharts 封装的图表组件",
            technology: ['JS', 'charts','Vue'],
            gitHub: 'https://github.com/ElemeFE/v-charts',
            time: '2020-02-02'
        },{
            name: "vue-echarts",
            logo: vueCharts,
            href: "https://v-charts.js.org",
            describe: "基于 Vue2.0 和 ECharts 封装的图表组件",
            technology: ['JS', 'charts','Vue'],
            gitHub: 'https://github.com/ecomfe/vue-echarts',
            time: '2020-02-02'
        }
    ];
    return chartsList;
};
