import styled from 'styled-components'

//General Sections 
export const WriteSection = styled.div`
    justify-content:center;
    align-items:center;
    align-content:center;
    padding:20px;
    min-height:100px;

`
export const FormSection = styled.div`
    min-width:340px;
    background:rgba(250,250,250,0.8);
    margin:10px;
    padding:30px;
    border-radius:8px;
    display:flex-inline;
    justify-content:center;
    align-items:flex-end;
    align-content:center;
    flex-direction:row;
    flex-wrap: wrap;
`
export const SelectSection = styled.div`
    justify-content:center;
    align-items:flex-end;
    align-content:center;
    display:flex-inline;
    bottom:0;
`

export const TodoSection = styled.div`
    width:100%;
    min-width:360px;
`

// styled form components
export const Select = styled.select`
    background:transparent;
    border:none;
    outline:none;
    appearance: button;
    margin:0px 20px 0px 20px;

`

export const TodoItem = styled.div`
    justify-content:flex-start;
    align-items:center;
    align-content:center;
    display:flex;
    margin: 10px 0px 10px 0px;
    border-radius: 4px;
    padding: 10px 5px 10px 5px;
    left:0;
`

export const TodoButtons = styled.div`
`

export const TodoContainer = styled.div`
    background:rgba(255,255,255,0.6);
    display:flex;
    justify-content:space-between;
    padding:8px;
    align-items:center;
    align-content:center;
    margin:5px;
    border-radius:4px;
    font-weight:inherit;
    font-size:14px;
`