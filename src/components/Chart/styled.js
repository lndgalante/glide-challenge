import styled from 'styled-components';
import { Typography } from 'antd';

/* Constants */
import { COLORS } from '../../lib/colors';
/* Components */
const { Title } = Typography;

const Container = styled.section`
  height: 100%;
  padding: 31px 49px;
  background: ${COLORS.lightWhite};

  .box {
    border: 1px solid #b4b4b4;
    background: #fff;
    width: 116px;
    height: 63px;
    padding: 5px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 6px;
    position: relative;

    &.root {
      margin-bottom: 30px;

      &:after {
        display: none;
      }
    }

    :hover {
      button {
        opacity: 1;
      }
    }

    &:after {
      content: '';
      top: -15px;
      height: 15px;
      width: 2px;
      position: absolute;
      background: #707174;
      margin: 0 auto;
    }

    &.no-childrens {
      border-style: dashed;
    }

    p {
      margin: 0;
      cursor: pointer;
      transition: all 400ms ease-in-out;

      :hover {
        color: #219bf6;
      }
    }

    button {
      cursor: pointer;
      position: absolute;
      bottom: -16px;
      right: 0;
      left: 0;
      width: 28px;
      height: 28px;
      margin: 0 auto;
      border: none;
      border-radius: 50%;
      color: #fff;
      outline: none;
      background-color: #219bf6;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 400ms ease-in-out;
    }
  }
`;

const EmployeesContainer = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-auto-flow: column;
  margin: 0;
  padding: 0;
  position: relative;

  li {
    display: grid;
    grid-gap: 30px;
    grid-auto-flow: row;

   /*  &:after {
      content: '';
      width: calc(100% - ${({ totalChildrens }) => (totalChildrens * 116) / 2}px - 60px);
      height: 1px;
      top: -15px;
      left: 0;
      right: 0;
      margin: 0 auto;
      position: absolute;
      border-top: 2px solid #707174;
    } */
  }
`;

const StyledTitle = styled(Title).attrs({ level: 2 })`
  margin-bottom: 92px;
  position: relative;
  color: #3e3d3d;

  ::after {
    content: '';
    position: absolute;
    width: 51px;
    height: 3px;
    left: 0;
    top: -6px;
    border-radius: 6px;
    background: ${COLORS.blue};
  }
`;

export { Container, EmployeesContainer, StyledTitle };
