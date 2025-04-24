// import React, { Component } from 'react'

// export default class TodoAdd extends Component {
//   state = {
//     inpText: '',
    
//   }

//   setText = (e) => {
//     this.setState({inpText:e.target.value.trim()})

//   }

  
  

//   render() {
//     return (
//       <div className='d-flex'>
//           <input type="text" className='form-control'value={this.state.inpText} onChange={this.setText} />
//           <button className='btn btn-info'onClick={()=>this.props.onAdd(this.state.inpText)}>add</button>
//     </div>
//     )
//   }
// }


import React, { Component } from 'react'

export default class TodoAdd extends Component {
  state = {
    inpText: '',
  }

  setText = (e) => {
    this.setState({ inpText: e.target.value.trim() })
  }

  updateInput = () => {
    if (this.state.inpText !== '') {  
      this.props.onAdd(this.state.inpText)
      this.setState({ inpText: '' })  
    }
  }

  render() {
    return (
      <div className='d-flex'> 
          <input type="text" className='form-control' value={this.state.inpText} 
            onChange={this.setText} />
          <button className='btn btn-info' onClick={this.updateInput}
          >add</button>
      </div>
    )
  }
}

