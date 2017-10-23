
export default class Links extends React.Component{

    state = {
        toggleCase: false
    };

    constructor(props){
        super(props);
        this.showCaseList = this.showCaseList.bind(this);
        this.addDocEvent();
    }

    addDocEvent(){
        document.addEventListener('click', this._onDocEventHandle.bind(this), false);
    }
    _onDocEventHandle(evt){
        let target = evt.target;
        if(target.id !== 'case'){
            this.setState({ toggleCase: false });
        }
    }

    showCaseList(evt){
        this.setState({ toggleCase: true });
    }

    render(){
        return (
            <div className="links">
                <a href="https://github.com/RodeyManager/gupack" target="_blank" className="doc">文档</a>
                <a href="javascript:void(0)" id="case" onClick={ this.showCaseList }>教程</a>
                <a href="https://github.com/RodeyManager/gupack.git" target="_blank" className="fa fa-github">GitHub</a>
                <ul className="case" style={{ display: this.state.toggleCase ? 'block' : 'none' }}>
                    <li><a href="https://github.com/RodeyManager/gupack_simple" target="_blank">ES6 + jQuery</a></li>
                    <li><a href="https://github.com/RodeyManager/vue_browserify" target="_blank">Vue + Browserify</a></li>
                    <li><a href="https://github.com/RodeyManager/react_browserify" target="_blank">React + Browserify</a></li>
                    <li><a href="https://github.com/RodeyManager/react_webpack" target="_blank">React + Webpack</a></li>
                    <li><a href="https://github.com/RodeyManager/angular_browserify" target="_blank">Angular + Browserify</a></li>
                </ul>
            </div>
        );
    }

}