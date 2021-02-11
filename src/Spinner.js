import React from "react";
import { useDispatch } from "react-redux";
import styled, {keyframes} from "styled-components";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { loadON } from "./redux/modules/loaded";


const Spinner = (props) => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        setTimeout(()=>{
            dispatch(loadON());
        }, 2000);
    });
    return(
        <SpinnerComponent className="Spinner">
            <Box>
                <HourglassEmptyIcon style={{ width: "250px", height: "250px" }}/>
            </Box>
            <Text>
                Loading...... 😄
            </Text>
        </SpinnerComponent>
    )
};

//애니메이션
const BoxSpin = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(359deg);
    }
`;

const SpinnerComponent = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Box = styled.div`
    animation: ${BoxSpin} 3s infinite linear;
`;

const Text = styled.div`
    font-size: 22px;
    font-weight: 600;
`;


export default Spinner;