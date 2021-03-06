// action を返す関数を action creater という
// view を担当する compenent 側で利用するから export 
// export const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: INCREMENT
})


export const decrement = () => ({
    type: DECREMENT
})
