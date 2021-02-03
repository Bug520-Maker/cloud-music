import { Loading } from 'element-ui';
export default function loading()
{
    Loading.service({
        text:"加载中",
        spinner:'el-icon-loading',
        background:"#ffffff",
        target:'#discovery'
    })
}