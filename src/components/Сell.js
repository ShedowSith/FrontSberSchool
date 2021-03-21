import React, { Component } from "react";

class Cell extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        };
    }
    render() {
        return(
            <div style = {style.cell} onClick={() => this.props.updateState(this.state.id)}>
                {this.props.value}
            </div>
        )
    }

}
const style = {
    but: {
        margin: 0,
        padding: 0,
        width: 50,
        border: "1px solid black",
        fontSize: 24,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cell: {
        float: 'left',
        display: 'flex',
        width: 50,
        height: 50,
        fontSize: 35,
        border: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2
    }
};
// const Cell = ({ value }) =>(
//     <div style = {style.but}>
//         {value}
//     </div>
// );

export default Cell;