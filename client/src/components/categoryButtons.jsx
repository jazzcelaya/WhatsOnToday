import React, {Component} from 'react';

class CategoryButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
    this.submitCategory = this.submitCategory.bind(this);
    this.handleCategoryConcerts = this.handleCategoryConcerts.bind(this);
  }

  handleCategoryConcerts(e) {
    e.preventDefault();

    this.setState({
      category: music
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

      <div className="text-right">
      <button onClick={this.props.getMusic} >Concerts</button>
      <button onClick={this.props.getTheater}>Theater</button>
      <button onClick={this.props.getSports}>Sports</button>
      <button onClick={this.props.getConferences}>Conferences</button>
      <button>Arts</button>
      </div>

    );
  }
}

export default CategoryButtons;
