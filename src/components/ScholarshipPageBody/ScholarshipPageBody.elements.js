import styled from 'styled-components'

export const Container = styled.section`
  background-color: #fff;
  min-height: auto;
  min-width:auto;
  box-sizing: content-box;
  display: block;
  text-align: center;
`

export const ColumnWrapper = styled.div`
  min-width: auto;
  width:auto;
  padding-top: 0px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

export const ComingSoonButton = styled.button`
    border-radius: 12px;
    background: #C13A2C;
    white-space: nowrap;
    padding: 14px 20px;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    color: #fff;
    font-size: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`