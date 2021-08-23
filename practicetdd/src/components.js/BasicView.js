import React, {Component} from 'react';

class BasicView extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        const {disabled=false} = this.props;
        this.state = {
            value: 1,
            disabled: disabled
        }
    }

    onClick(){
        this.props.callAPI(1, 2, 3);
    }

    render(){
        const { b:c = {} } = this.props;
        const { a } = c;
        const {disabled} = this.state;

        return(
            <div>
                Hello world {a}
                <span onClick={this.onClick}>
                    hola
                </span>
                <span>
                    {disabled? 'ENABLE': 'DISABLE'}
                </span>
            </div>
    
        )

    }

}


export default BasicView;