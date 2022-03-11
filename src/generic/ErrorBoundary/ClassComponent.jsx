import React, { Component } from "react";

class ClassComponent extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activo: false
    }
  }
  
  isActive = () => {
    return this.state.activo ? 'Active' : 'No Activo'
  }

  onClickHandler = () => {
    this.setState({ activo: !this.state.activo })
  }

  componentDidMount() { 
   console.log('El componente se ha montado'); 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState.activo);
    console.log('curreState', this.state.activo);
    console.log('El componente se ha actualizado');  
  }

  componentWillUnmount() {
    console.log('El component se ha desmontado');
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>
          Activar
        </button>
        <h1>
          ErrorBoundary {this.props.saludo} 
          {
            this.isActive()
          }
        </h1>
      </div>
    )
  }

}

export default ClassComponent;