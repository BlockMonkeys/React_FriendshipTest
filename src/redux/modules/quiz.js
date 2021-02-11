import { firestore } from "../../firebase";

//action
const USER = 'quiz/USER';
const LOAD = 'quiz/LOAD';
const PROGRESS = 'quiz/PROGRESS';
const SCORE = 'quiz/SCORE';

//initial state
const initialState = {
    name : 'Anonymous',
    progress: 0,
    list:[
        {question: "리덕스스토어1", answer: "O"},
        {question: "리덕스스토어2.", answer: "O"},
        {question: "리덕스스토어3", answer: "X"},
        {question: "리덕스스토어4", answer: "O"},
        {question: "리덕스스토어5", answer: "X"},
        {question: "리덕스스토어6", answer: "O"},
    ],
    score: 0
}

//action creator
export const userName = (user_name) => {
    return { type: USER, user_name};
}

export const loadQuiz = (quiz_list) => {
    return { type: LOAD , quiz_list };
};

export const progressQuiz = (quiz) => {
    return { type: PROGRESS, quiz};
};

export const addScore = () => {
    return { type: SCORE };
}

//Firebase
const quiz_fb = firestore.collection("quiz");

export const loadQuizFB = () => {
    return function(dispatch){
        quiz_fb.doc("heK9mGlNb5VLJMm2Opj9").get().then((docs)=> {
            let newQuizList = [];
            if(docs.exists){
                newQuizList = docs.data().list;
            };
            dispatch(loadQuiz(newQuizList));
        });
    };
};

export default function reducer(state = initialState, action = {}){
    switch (action.type) {
        case 'quiz/USER':
            const user_name = action.user_name;
            return {...state, name: user_name};

        case 'quiz/LOAD': {
            if(action.quiz_list.length > 0){
                return {...state, list: action.quiz_list};
            }
            return state;
        };
        case 'quiz/PROGRESS':
            const newState = state.progress +1;
            return {...state, progress: newState};

        case 'quiz/SCORE':
            return {...state, score: state.score +1};

        default:
            return state;
    }
}
