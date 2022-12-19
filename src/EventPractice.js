import React, {Component} from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  handleClick = () => {
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={(e) => {
              this.setState({
                message: e.target.value
              })
            }
          }
        />
      </div>
    );
  }
}

export default EventPractice;