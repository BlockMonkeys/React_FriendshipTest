//action
const ON = "loaded/ON";
const OFF = "loaded/OFF";

const initialState = {
    is_loaded : false
};

//action Creator
export const loadON = () => {
    return { type: ON };
};

export const loadOFF = () => {
    return { type: OFF };
};


export default function reducer(state=initialState, action={}){
    switch (action.type) {
        case "loaded/ON":
            return { is_loaded: true };
        
        case "loaded/OFF":
            return { is_loaded: false };
    
        default:
            return state;
    }
}