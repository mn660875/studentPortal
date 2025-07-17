const { createSlice , nanoid} = require("@reduxjs/toolkit");


const initialState={
    users:[]
}

const Slice= createSlice({
    name: "adduserSlice",
    initialState,
    reducers:{
        addUser:(state, action)=>{
            const data={
                 id:nanoid(),
                 name:action.payload
            }
            state.users.push(data)
        },
        removerUser:(state, action)=>{
           const data= state.users.filter((item)=>{
            return item.id!=action.payload
           })
           state.users= data;
        }
    }
})

export const {addUser, removerUser}=Slice.actions
export default Slice.reducer

