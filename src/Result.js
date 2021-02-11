import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToRankFB, loadRankFB } from "./redux/modules/result";
import Button from "@material-ui/core/Button";

const Result = (props) => {
    const dispatch = useDispatch();
    const quizes = useSelector(state => state.quiz.list);
    const users = useSelector(state => state.result.user_rank);
    const user_score = useSelector(state => state.quiz.score);
    const user_name = useSelector(state => state.quiz.name);
    const percentile_score = Math.floor((user_score/quizes.length)*100);
    useEffect(()=>{
        dispatch(loadRankFB());
    });
    useEffect(()=>{
        window.alert("수고하셨습니다 👍");
    },[]);

    return(
        <ResultComponent>
            <NamingBox>
                <div>{user_name}님의 점수는!! {percentile_score} 점 입니다 👍 </div>
            </NamingBox>
                <Button variant="contained" color="primary" onClick={()=>{
                    props.history.push('/');
                    window.location.reload();
                }} style={{height: "20px", marginTop: "10px"}}>처음으로 돌아가기</Button>
                {users.map((items, idx)=> {
                    //정렬... sort
                    return(
                        <ContentBox key={idx}>
                            <UserName>{items.name}</UserName>
                            <UserScore>{items.score}</UserScore>
                        </ContentBox>
                    )
                })}
                <Button variant="contained" onClick={()=>{
                    dispatch(addToRankFB(user_name, percentile_score));
                }}>기록남기기</Button>
        </ResultComponent>
    )
};

const ResultComponent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NamingBox = styled.div`
    background-color: floralwhite;
    border-radius: 25px;
    padding: 5px;
    font-weight: 900;
`;

const ContentBox = styled.div`
    border: 1px solid black;
    width: 180px;
    padding: 5px;
    margin: 8px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const UserName = styled.span`
    font-weight: 600;
`;

const UserScore = styled.span`
    color: red;
    font-weight: 600;
`;


export default Result;