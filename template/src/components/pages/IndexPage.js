
// import React from 'react';
import Hello from '../commons/Hello';
import ToolChain from '../commons/ToolChain';

export default class IndexPage extends React.Component {
    render(){
        return (
            <div>
                <Hello name="React"/>
                <ToolChain/>
            </div>
        );
    }
};
