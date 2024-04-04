'use client'

import styled from 'styled-components';

const page = () => {

    const Main = styled.h1({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    });

    const Title1 = styled.h1({
        color: 'red',
    });

    const Title2 = styled.h2({
        color: 'blue',
    });

    const Title3 = styled.h3`
        color: yellow;
    `;

    return (
        <Main>
            <Title1>Test h1</Title1>
            <Title2>Test h2</Title2>
            <Title3>Test h3</Title3>
            <h4>Test h4</h4>
            <h5>Test h5</h5>
            <h6>Test h6</h6>
            <p>Test P</p>
        </Main>
    )
}

export default page