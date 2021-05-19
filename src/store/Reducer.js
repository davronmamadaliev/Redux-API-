import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'post',
    initialState: {
        posts: [
            {id: 1, title: 'sdsds', body: 'dssdfdsf'},
            {id: 2, title: 'sdewfwefsds', body: 'dssdfewfwdsf'}
        ]
    },
    reducers: {
        getPost: () => {
            console.log('keldi')
        }
    }
})

export function func1() {
    return {
        type:'post/getPost'
    }
}


export default slice.reducer;