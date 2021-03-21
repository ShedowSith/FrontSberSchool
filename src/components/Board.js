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
    checkWinner(){
        const temp = this.state.cell.slice();
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
        if (this.state.currentPlayer === "X") {
            this.state.cell[i] = "X";
            this.checkWinner();
            this.setState({currentPlayer: "0"})
        } else {
            this.state.cell[i] = "0";
            this.checkWinner();
            this.setState({currentPlayer: "X"})
        }
    }
    info (){
       return <div>Сейчас ходит игрок: {this.state.currentPlayer}</div>
    }
    getCell(i){
        return <Cell id = {i} value = {this.state.cell[i]} updateState={this.updateState}/>
    }

    startNew(){
        this.setState({cell: [null, null, null, null, null, null, null, null, null],  currentPlayer: "X", play: true})
    }
    render() {
        return(
            <div style={style.wrap}>
                <div style={style.header}>Крестики & Нолики</div>
                <div>
                    {this.getCell(0)}
                    {this.getCell(1)}
                    {this.getCell(2)}
                </div>
                <div>
                    {this.getCell(3)}
                    {this.getCell(4)}
                    {this.getCell(5)}
                </div>
                <div>
                    {this.getCell(6)}
                    {this.getCell(7)}
                    {this.getCell(8)}
                </div>
                {this.info()}

                <button onClick={() => this.startNew()}>Новая игра</button>
            </div>
        )
    }
}

// const Board = () =>(

// );

export default Board;