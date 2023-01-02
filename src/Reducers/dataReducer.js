const initialState = {
   data : {}
}
const dataReducer = (state = initialState, action)=>{
    switch(action.type){
        case "datadetails":
            return {
                data: action.payload
            }
        
        default:
            return state    
        }
}

export default dataReducer