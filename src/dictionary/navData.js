const navClassifyData = {
    article: [
        {path:'article',name: '推荐', classify: 'recommend'},
        {path:'article',name: '前端开发', classify: 'web'},
        {path:'article',name: 'Java开发', classify: 'java'}
    ],
    boutique: [
        {path:'boutique',name: 'Ui框架', classify: 'ui'},
        {path:'boutique',name: '可视化插件', classify: 'charts'},
        {path:'boutique',name: '技术站点', classify: 'website'}
    ]
};

export const getNavClassifyData = (classify) => {
    let classifyData = new Array();
    if (classify != '') {
        classifyData = navClassifyData[classify];
    }
    return classifyData;
}