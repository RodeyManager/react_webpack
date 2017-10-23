
import IndexPage from '../../components/pages/IndexPage';
import AppService from '../../services/app.service';
import TestService from '../../services/test.service';

ReactDOM.render(<IndexPage />, document.getElementById('app'));

let testService = new TestService();
testService.getTestData().then(data => console.log(data));

AppService.test({name: 'gupack'}, {method: 'POST'})
    .then(res =>{
        console.log(res.data);
    }).catch(err =>{
    console.log(err);
});

AppService.test.get().then(res =>{
    console.log(res.data)
});

AppService.test.post().then(res =>{
    console.log(res.data)
});