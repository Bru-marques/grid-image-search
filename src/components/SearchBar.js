import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment ">
        <div className="ui vertical masthead center aligned segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label className="label">Image Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={(e) => {
                  this.setState({ term: e.target.value });
                }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
