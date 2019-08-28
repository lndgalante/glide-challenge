import styled from 'styled-components';

/* Constants */
import { COLORS } from '../../lib/colors';

const Container = styled.nav`
  height: 63px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px ${COLORS.lightGrey};
`;

export { Container };
