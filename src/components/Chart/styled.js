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

export { Container, StyledTitle };
