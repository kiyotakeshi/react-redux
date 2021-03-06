import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } }  = field
    return(
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  } 

  async onDeleteClick() {
    // console.log(this.props.match)
    const { id } = this.props.match.params
    console.log(id)
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values){
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {

    // 何も入力されていない状態 => pristine
    // 2度押されないようにする => submit ボタンが押されている状態かを判定する => submitting
    const { handleSubmit, pristine, submitting, invalid } = this.props

    console.log(submitting)

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField}/>
          <Field label="Body" name="body" type="text" component={this.renderField}/>
        </div>

        <div>
          <input type="submit" value="Submit" disabled={ pristine || submitting || invalid } />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

// event の状態に関して描画しないので mapStateToProps は null
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
