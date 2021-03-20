import React, { Component } from "react";
import Cell  from './Сell'
const style = {
    board: {
        display: 'flex',
        justifyContent: 'center'
    }
};
class Board extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cell: [null, null, null, null, null, null, null, null, null],
            currentPlayer: "X"
        };
    }
    updateState = (i) => {
        const temp = this.state.cell.slice();
        if (this.state.currentPlayer == "X") {
            temp[i] = "X";
            this.setState({cell: temp});
            this.setState({currentPlayer: "0"})
        } else {
            temp[i] = "0";
            this.setState({cell: temp});
            this.setState({currentPlayer: "X"})
        }
    }
    info (){
        return <div>Текущий игрок: {this.state.currentPlayer}</div>
    }
    render() {
        return(
            <div style={style.board}>
                <div>
                    <Cell id = {0} value = {this.state.cell[0]} updateState={this.updateState}/>
                    <Cell id = {1} value = {this.state.cell[1]} updateState={this.updateState}/>
                    <Cell id = {2} value = {this.state.cell[2]} updateState={this.updateState}/>
                </div>
                <div>
                    <Cell id = {3} value = {this.state.cell[3]} updateState={this.updateState}/>
                    <Cell id = {4} value = {this.state.cell[4]} updateState={this.updateState}/>
                    <Cell id = {5} value = {this.state.cell[5]} updateState={this.updateState}/>
                </div>
                <div>
                    <Cell id = {6} value = {this.state.cell[6]} updateState={this.updateState}/>
                    <Cell id = {7} value = {this.state.cell[7]} updateState={this.updateState}/>
                    <Cell id = {8} value = {this.state.cell[8]} updateState={this.updateState}/>
                </div>
                {this.info()}
            </div>

        )
    }
}

// const Board = () =>(
//     <div style={style.board}>
//         <div>
//             <Cell/>
//             <Cell/>
//             <Cell/>
//         </div>
//         <div>
//             <Cell/>
//             <Cell/>
//             <Cell/>
//         </div>
//         <div>
//             <Cell/>
//             <Cell/>
//             <Cell/>
//         </div>
//
//     </div>
// );

export default Board;