import React, { Component } from "react";
import Cell  from './Сell';

const style = {
    wrap: {
        margin: 'auto',
        display: 'table',
        border: '1px solid #666666',
        borderSpacing: 5
    },
    header:{
        margin: 'auto',
        textAlign: 'center'
    }
};

class Board extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cell: [null, null, null, null, null, null, null, null, null],
            currentPlayer: "X",
            play: true
        };
    }
    checkWinner(temp){
        if(temp[0]===temp[1] && temp[0]===temp[2] && temp[0]!== null ||
            temp[3]===temp[4] && temp[3]===temp[5] && temp[3]!== null ||
            temp[6]===temp[7] && temp[6]===temp[8] && temp[6]!== null ||
            temp[0]===temp[3] && temp[0]===temp[6] && temp[0]!== null ||
            temp[1]===temp[4] && temp[1]===temp[7] && temp[1]!== null ||
            temp[2]===temp[5] && temp[2]===temp[8] && temp[2]!== null ||
            temp[0]===temp[4] && temp[0]===temp[8] && temp[0]!== null ||
            temp[6]===temp[4] && temp[6]===temp[2] && temp[6]!== null){
            this.setState({play: false})
            alert('Выграл игрок '+this.state.currentPlayer);
            return;
        }
        if(this.state.cell.indexOf(null) === -1) {
            this.setState({play: false})
            alert('Ничья. Игра закончена. Начните новую.');
        }
    }
    updateState = (i) => {
        if(this.state.play === false){
            alert('Игра закончена. Начните новую.');
            return;
        }
        if(this.state.cell[i] !== null){
            alert('Ячейка занята. Выберите другую.');
            return;
        }
        const cell = [...this.state.cell]
        cell[i] = this.state.currentPlayer
        if (this.state.currentPlayer === "X") {
            this.checkWinner(cell);
            this.setState({currentPlayer: "0", cell})
        } else {
            this.checkWinner(cell);
            this.setState({currentPlayer: "X", cell})
        }
    }
    startNew(){
        this.setState({cell: [null, null, null, null, null, null, null, null, null],  currentPlayer: "X", play: true})
    }

    render() {
        return(
            <div style={style.wrap}>
                <div style={style.header}>Крестики & Нолики</div>
                <div>
                    <Cell id = {1} value = {this.state.cell[1]} updateState={this.updateState}/>
                    <Cell id = {2} value = {this.state.cell[2]} updateState={this.updateState}/>
                    <Cell id = {3} value = {this.state.cell[3]} updateState={this.updateState}/>
                </div>
                <div>
                    <Cell id = {4} value = {this.state.cell[4]} updateState={this.updateState}/>
                    <Cell id = {5} value = {this.state.cell[5]} updateState={this.updateState}/>
                    <Cell id = {6} value = {this.state.cell[6]} updateState={this.updateState}/>
                </div>
                <div>
                    <Cell id = {7} value = {this.state.cell[7]} updateState={this.updateState}/>
                    <Cell id = {8} value = {this.state.cell[8]} updateState={this.updateState}/>
                    <Cell id = {9} value = {this.state.cell[9]} updateState={this.updateState}/>
                </div>
                <div>Сейчас ходит игрок: {this.state.currentPlayer}</div>
                <button onClick={() => this.startNew()}>Новая игра</button>
            </div>
        )
    }
}

export default Board;