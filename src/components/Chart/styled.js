import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

const Container = styled.article`
  height: 100%;
  padding: 31px 49px;
  background: #f8faff;
`;

const StyledTitle = styled(Title)`
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
    background: #219bf6;
    border-radius: 6px;
  }
`;

export { Container, StyledTitle };
