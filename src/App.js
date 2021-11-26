import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import reactDom from "react-dom";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      random: {},
    };
  }

  componentDidMount() {
    fetch("https://quotable.io/quotes?page=2") //API returning list of quotes
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          items: res,
        });
      });
      fetch("https://api.quotable.io/random") //API returning random Quote
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          random: res,
        });
      });
  }

  fetch_random = () => {
    fetch("https://api.quotable.io/random") //API returning random Quote
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          random: res,
        });
      });
  };

  //Display the random quote
  display_random = () => {
    this.fetch_random();
    const element_random = (
      <p align="center">
        <strong>Quote : {this.state.random["content"]}</strong>
        <i>- {this.state.random["author"]}</i>
      </p>
    );

    reactDom.render(element_random, document.getElementById("content"));
  };

  //Display the list
  display_list = () => {
    const element = (
      <div className="App">
        <table>
          <th>Tag</th>
          <th>Author</th>
          <th>Quote</th>
          {this.state.items["results"].map((item) => (
            <tr>
              <td> {item["tags"]} </td>
              <td> {item["author"]} </td>
              <td> {item["content"]}</td>
            </tr>
          ))}
        </table>
      </div>
    );
    ReactDOM.render(element, document.getElementById("content"));
  };
  render() {
    return (
      <div>
        <button onClick={this.display_random}>SDL API 1</button>
        <button onClick={this.display_list}>SDL API 2</button>
      </div>
    );
  }
}

export default App;
