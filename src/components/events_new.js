import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import { postEvent } from '../actions';

class EventsNew extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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

  async onSubmit(values){
    await this.props.postEvent(values)
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

const mapDispatchToProps = ({ postEvent })

// event の状態に関して描画しないので mapStateToProps は null
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
)
