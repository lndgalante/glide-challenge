import styled from 'styled-components'
import { Typography } from 'antd';

const { Title } = Typography;

const Container = styled.div`
  height: 100%;
  padding: 31px 49px;
  background: #F8FAFF;
`

const StyledTitle = styled(Title)`
  margin-bottom: 92px;
  position: relative;
  color: #3E3D3D;

  ::after {
    content: '';
    position: absolute;
    width: 51px;
    height: 3px;
    left: 0;
    top: -6px;
    background: #219BF6;
    border-radius: 6px;
  }
`

export { Container, StyledTitle }
