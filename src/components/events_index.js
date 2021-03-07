import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { readEvents } from '../actions';

class EventsIndex extends Component {

  // component が mount された時に呼ばれるメソッド
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {

    return (
      <table>
        <thead>
          <tr>
            {/* {console.log(props.events)} */}
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

// 短く書くパターン
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
