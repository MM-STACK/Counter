import React, {Component}   from 'react';

const withCounter = (WrappedComponent, IncrementNumber ) => {
    class EnhancedComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                x: props.x | 0
            }
        }
        

        Increment = () => {
            this.setState(prevState => {
                return {x: prevState.x + IncrementNumber}
            })
        }

     
        render() {


            return <WrappedComponent  
                x={this.state.x}
                Increment={this.Increment}
                {...this.props}
            />
        }
    }

    return EnhancedComponent;

}

export default withCounter
