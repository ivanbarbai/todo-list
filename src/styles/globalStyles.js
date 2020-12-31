
import styled from 'styled-components'

export const Layout = styled.div`
    align-content:center;
    align-items:center;
    justify-content:flex-start;
    flex-direction:column;
    display:flex;
    background:#24BD64;
`

export const Container = styled.div`
    align-content:center;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    display:flex;
`

export const Header = styled.div`
    align-content:center;
    align-items:center;
    justify-content:center;
    display:flex-inline;
    display:inline-flex;
    margin:20px;
`

// styled components
export const Button = styled.button`
    decoration:none;
    border: 1px solid transparent;
    border-radius: 3px;
    outline:none;
    height:25px;
    width:25px;
    margin:0 5px 0 5px;
    align-content:center;
    align-items:center;
    justify-content:center;
    background:white;
`

export const PlusButton = styled(Button)`
    background:#24BD64;
`
export const CheckButton = styled(Button)`
    background:#24BD64;
`

export const TrashButton = styled(Button)`
    background:#FF2607;
`

export const Input = styled.input.attrs(props => ({
    type: 'text'
}))`
    border: 0px;
    border-bottom: 0.5px solid #4F4F4F;
    background:transparent;
    decoration:none;
    outline:none;
    min-width:260px;
    font-weight:bold;
    color:#303030;
    ::placeholder{
        color:#606060;
    }
    margin:10px;
    padding:2px;
`
