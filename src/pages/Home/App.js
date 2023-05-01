import React from 'react';
import Button from '../../components/Button';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleClickAddCount = () => {
    this.setState({ count: this.state.count+1})
  }

  handleClear = () => {
    this.setState({ count: 0})
  }

  render(){
    console.log(this.state.count)


    return (
      <React.Fragment>
        <label>Count: {this.state.count}</label>

        <br/>
        <Button text={"Adicionar"} onClickButton={this.handleClickAddCount}/>
        <Button text={"Limpar"} onClickButton={this.handleClear}/>
      </React.Fragment>
    );
  }
}

export default App;
