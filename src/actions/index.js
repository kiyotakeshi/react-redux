import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENT = 'DELETE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//  ピュアなオブジェクトではなく、非同期処理を返せるように redux-thunk を使う
// action の代わりに、関数を返せるようにする
export const readEvents = () => async dispath => {
    // axios は非同期処理で戻り値が promise になる 
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    // console.log(response)
    dispath({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispath => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispath({ type: CREATE_EVENTS, response })
}

export const deleteEvent = id => async dispath => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispath({ type: DELETE_EVENT, id })
}