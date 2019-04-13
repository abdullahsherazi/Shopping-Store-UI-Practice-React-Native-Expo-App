const Lang = (state = "en", action) => {
    switch (action.type) {
        case 'EN':
            state="en"
            return state
            
        case 'JP':
            state="jp"
            return state
        default:
            return state
    }
}

export default Lang