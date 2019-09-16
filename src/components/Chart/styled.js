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

  .ant-spin-container {
    padding: 20px 0;
    overflow-x: auto;
  }

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
      z-index: 50;
      transition: all 400ms ease-in-out;
    }
  }
`;

const EmployeesContainer = styled.ul`
  display: grid;
  grid-auto-flow: column;

  margin: 0;
  padding: 0;
  position: relative;

  ${({ totalChildrens }) => {
    if (!totalChildrens) return;
    console.log('TCL: totalChildrens', totalChildrens);

    return `&:after {
      content: '';
      top: -30px;
      height: 16px;
      width: 2px;
      position: absolute;
      background: #707174;
      right: 0;
      left: 0;
      margin: 0 auto;
    }
    `;
  }}

  li {
    display: grid;
    grid-gap: 30px;
    grid-auto-flow: row;
    grid-template-rows: 63px;

    position: relative;

    :before {
      content: '';
      left: 0;
      right: 0;
      top: -15px;
      position: absolute;
      width: calc(100% + 30px);
      border-top: 2px solid #707174;
    }

    :not(:first-child):not(:last-child):before {
      left: -30px;
      width: calc(100% + ${({ totalChildrens }) => totalChildrens * 30}px);
    }

    :first-child:before {
      margin-left: auto;
      width: 50%;
    }

    :last-child:before {
      margin-right: auto;
      width: 50%;
    }

    :only-child:before {
      content: none;
    }
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
