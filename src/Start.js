import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userName } from './redux/modules/quiz';
import friendshipImg from "./img/friendship.png";
import Button from '@material-ui/core/Button';
import { loadOFF } from "./redux/modules/loaded";

const Start = (props) => {
    const dispatch = useDispatch();
    const user_input = React.createRef();
    const startBtnController = () => {
        dispatch(userName(user_input.current.value));
        dispatch(loadOFF());
        props.history.push('/quiz');
    }
    return(
        <StartComponent className="Start">
            <Title>FrindShip TEST APP</Title>
            <ImgBox src={friendshipImg} />
            <ControllComponent>
                <InputBox type="text" ref={user_input} placeholder="닉네임을 적어주세요 😎" />
                <Button onClick={startBtnController} variant="contained" color="primary">시작하기</Button>
            </ControllComponent>
        </StartComponent>
    );
};



const StartComponent = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.div`
    font-weight: 800;
    font-size: 25px;
    margin-bottom: 35px;
`;

const ImgBox = styled.img`
    width: 250px;
    height: 250px;
`;

const ControllComponent = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 35px;
`;

const InputBox = styled.input`
    padding: 3px;
    margin-bottom: 5px;
`;


export default Start;