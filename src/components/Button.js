import styled from 'styled-components'

export default styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 12px 20px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;

  :active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }

  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;

  :hover {
    background-color: #6FC6FF;
  }

  &.green {
    background-color: #2ecc71;
    box-shadow: 0px 5px 0px 0px #15B358;
  }

  &.green:hover {
    background-color: #48E68B;
  }
`
