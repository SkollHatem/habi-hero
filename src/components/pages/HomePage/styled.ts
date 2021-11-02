import styled from 'styled-components'

export const Title = styled.h1`
    color: #fff;
    font-size: 40px;
    
    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 64px;
    }
`

export const Subtitle = styled.p`
    color: #fff;
    font-size: 14px;

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 20px;
        max-width: 60%;
    }
`
export const Content = styled.div`
    position: relative;
    z-index: 2;
`
