import React, {Component} from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
    this.submitCategory = this.submitCategory.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory(e) {
    e.preventDefault();

    this.setState({
      category: e.target.value
    });
  }

  submitCategory(e){
    e.preventDefault();
    this.props.getCategory(this.state.category);

    this.setState({
      category: ''
    })
  }

  render() {
    return (
      <form>
      <div className="text-right">
        <input className="form-control" className="radius form-control form-control-lg" value={this.state.category} placeholder='choose a category' onChange={this.handleCategory}/>
        <button className="search" onClick={this.submitCategory}></button>
      </div>
      </form>
    );
  }
}

export default Form;
