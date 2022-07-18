import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MintButton = styled.button`
    border-radius: 12px;
    white-space: nowrap;
    padding: 14px 20px;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    color: #fff;
    font-size: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 260px;
    transition: all 0.3s ease-in-out;
    background: #000;

    &:hover {
        transform: scale(0.9);
    }

`

export const ParagraphText = styled.h3`
  max-width: 740px;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: lighter;
  line-height: 24px;
  color: #000;
  padding: 20px;

`

export const WalletText = styled.h2`
  max-width: 740px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  padding: 20px;
`

export const ProgressText = styled.h2`
  max-width: 740px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  padding: 20px;
`
export const ProgressBarWrapper = styled.div`
`
export const FooterText = styled.h4`
  display:flex;
  justify-content: center;
  align-items: center;
  padding:20px;
`
