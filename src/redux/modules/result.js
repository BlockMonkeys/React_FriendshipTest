import { firestore } from "../../firebase";

//action
const LOAD = 'rank/LOAD';
const RANK = 'rank/USER';

//initialstate
const initialstate = {
    user_rank : [
        {name: '가라데이터', score: '70'},
        {name: '가라데이터', score: '60'},
        {name: '가라데이터', score: '50'},
        {name: '가라데이터', score: '40'},
        {name: '가라데이터', score: '30'},
        {name: '가라데이터', score: '20'},
    ]
}

//action Creator

export const loadRank = (rank) => {
    return { type : LOAD, rank };
};

export const addToRank = (user_name, user_score) => {
    return { type: RANK , user_name, user_score };
}

//Firebase
const result_db = firestore.collection("quiz");

export const loadRankFB = () => {
    return function(dispatch){
        result_db.doc("GLo0h38NTgPfnIgJehOh").get().then((docs)=> {
            let newRankList = [];
            if(docs.exists){
                newRankList = docs.data().user_rank;
            }
            dispatch(loadRank(newRankList));
        });
    };
};

export const addToRankFB = (user_name, user_score) => {
    return function(){
        result_db.doc("GLo0h38NTgPfnIgJehOh").get().then((docs)=> {
            const _rankData = docs.data().user_rank;
            const new_data = [{name: user_name, score: user_score}];
            const user_rank = _rankData.concat(new_data);
            result_db.doc("GLo0h38NTgPfnIgJehOh").update({user_rank});
        });
    }
}


//reducer

export default function reducer(state = initialstate, action = {}){
    switch (action.type) {
        case 'rank/LOAD': {
            if(action.rank.length > 0){
                return {...state, user_rank: action.rank};
            }
            return state;
        };

        case 'rank/USER':
            const newUser = [...state.user_rank, { name: action.user_name, score: action.user_score }];
            return { user_rank : newUser };

        default:
            return state;
    }

}