import React from 'react';
import styled from 'styled-components';

const DetailDiv = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
    // @media screen and (max-width: 850px) {
    //     flex-direction: column;
    // }
`;

const DetailLabelDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1 1 0px;
`;

const DetailLabelBigDiv = styled.div`
    display: flex;
    flex: 3 3 0px;
    padding-left: 15px
`;

const LabelInputSide = ({ name, edit, value, ...props }) => (
    <DetailDiv>
        <DetailLabelDiv>
            <label>{name}</label>
            <label>:</label>
        </DetailLabelDiv>
        <DetailLabelBigDiv>
            {edit ? <input type="text" name="user_name" className="input" value={value} /> : value}
        </DetailLabelBigDiv>
    </DetailDiv>
);

export default LabelInputSide;