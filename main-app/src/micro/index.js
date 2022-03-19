import { message} from "ant-design-vue";
import { registerMicroApps,
addGlobalUncaughtErrorHandler,
start
} from 'qiankun'
import apps from './apps'

/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
    // qiankun 生命周期钩子 - 微应用加载前
    beforeLoad: app => {
        console.log('beforeLoad', app.name)
        return Promise.resolve()
    },
    // qiankun 生命周期钩子 - 微应用挂载后
    afterMount: app => {
        console.log('afterMount', app.name)
        return Promise.resolve()
    },
   /* afterUnmount: app => {
       console.log(app)
    },*/


});
addGlobalUncaughtErrorHandler(event => {
    console.error(event);
    const { message: msg } = event
    // 加载失败时提示
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        message.error("微应用加载失败，请检查应用是否可运行");
    }
})
export default  start