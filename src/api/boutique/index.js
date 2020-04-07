import {uiList} from "../../dictionary/boutique/uiList";
import {chartsList} from "../../dictionary/boutique/chartsList";
import {websiteList} from "../../dictionary/boutique/websiteList";

// 获取精品推荐列表数据
export const getBoutiqueList = (classify) => {
    if(classify == 'ui'){
        return uiList();
    }else if(classify == 'charts'){
        return chartsList();
    }else if(classify == 'website'){
        return websiteList();
    }else{
        return [];
    }
}