import React, {useEffect} from "react";
import styled from "styled-components";
import { useDispatch ,useSelector } from "react-redux";
import { addScore, loadQuizFB, progressQuiz } from "./redux/modules/quiz";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Quiz = (props) => {
    const dispatch = useDispatch();
    const user_name = useSelector(state => state.quiz.name);
    const progressNum = useSelector(state => state.quiz.progress);
    const OBtn = React.createRef();
    const XBtn = React.createRef();
    const quizDB = useSelector(state => state.quiz);

    const answer_O = () => {
        if(quizDB.list[progressNum].answer === "O"){
            dispatch(addScore());
        };

        if(quizDB.list.length-1 > progressNum){
            dispatch(progressQuiz());
        } else {
            props.history.push("/result");
        };
    }
    const answer_X = () => {
        if(quizDB.list[progressNum].answer === "X"){
            dispatch(addScore());
        };

        if(quizDB.list.length-1 > progressNum){
            dispatch(progressQuiz());
        } else {
            props.history.push("/result");
        };
    };
    const quizOutput = () => {
        if(quizDB.list.length > progressNum){
            return (
                <div>{quizDB.list[progressNum].question}</div>
            );
        };
    };

    useEffect(()=>{
        dispatch(loadQuizFB());
    });

    return(
        <QuizComponents>
            <HelloMsg>안녕하세요, {user_name} 님 ! 🤚🏼</HelloMsg>
            <QuestionText>{quizOutput()}</QuestionText>
            <ButtonGroup>
                <Button onClick={answer_O} ref={OBtn} variant="contained" color="primary" style={{width: "100px"}}>O</Button>
                <Button onClick={answer_X} ref={XBtn} variant="contained" color="secondary" style={{width: "100px"}}>X</Button>
            </ButtonGroup>
        </QuizComponents>
    )
}

const QuizComponents = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const HelloMsg = styled.div`
    font-weight: 800;
    background-color: floralwhite;
`;

const QuestionText = styled.div`
    color: darkcyan;
`;


export default Quiz;