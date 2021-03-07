import _ from 'lodash';
import { 
    READ_EVENTS,
    DELETE_EVENT,
} from '../actions';

export default (events = {}, action) => {
    switch(action.type){
        case READ_EVENTS:
            // 全てを取り出して処理するのは効率が悪い
            // [
            //    {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
            //    {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 1."}
            // ]
            // console.log(action.response.data)

            // 以下のような構造にする
            // {
            //    1: {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
            //    2: {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 1."}
            // }
            // id で抽出したものを key として再配置する
            // console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENT:
            // console.log(action.id)
            // 削除した event はメモリ上から消去する
            delete events[action.id];
            // state 演算子を使うことで新しいメモリ空間上に、更新後の event の状態を reducer が返す
            return { ...events };
        default:
            return events;
    }
}