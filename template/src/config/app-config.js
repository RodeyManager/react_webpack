import API from './api';

const ENV = 'local';
const protocolReg = /^(https?:)?\/\//i;

const App = {

    // 接口host
    ServerHost: getServerHost(),
    method: 'POST',
    sendTime: ENV === 'local' || ENV === 'dev' ? 5 : 60,
    debug: ENV !== 'prd',
    apiSuffix: ENV === 'local' ? '.json' : '',

    webServiceUrls: API,
    getWebServiceUrl: function(name, host){
        let APINAME = App.webServiceUrls[name];
        return protocolReg.test(APINAME) ? APINAME : App.getHosts((host || App.ServerHost) + APINAME + (App.apiSuffix || ''));
    },
    getHosts: function(page){
        if(protocolReg.test(page) || /^\.+\//.test(page)) return page;
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + (page ? '/' + page : '');
    }

};

function getServerHost(){
    return ENV === 'local' ? '../../src/mockData/' :
        ENV === 'dev' ? getDevHost() :
            ENV === 'stg' ? 'app/' :
                ENV === 'prd' ? 'app/' : '';
}

function getDevHost(){
    return 'http://192.168.1.100:9002/app/'; //(Rodey Luo)
}

export default App;
