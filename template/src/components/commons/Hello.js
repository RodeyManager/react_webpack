
import Logo from './Logo';
import Links from './Links';

export default class Hello extends React.Component{
    state = {};

    constructor(props){
        super(props);
        this.state = { ...this.state, ...props };
    }
    render(){
        return (
            <div className="hello">
                <Logo/>
                <h1>{ 'Hello ' + this.state.name }</h1>
                <Links/>
            </div>
        )
    }
}