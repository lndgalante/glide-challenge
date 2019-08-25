import React, { useState } from 'react';
import { Spin, Drawer } from 'antd';
import PropTypes from 'prop-types';

const SideDrawer = ({ children, isLoading, title, placement, visible, closable, onCloseDrawer }) => {
  const [isVisible, setVisible] = useState(visible);

  const handleCloseDrawer = () => {
    setVisible(false);
    onCloseDrawer();
  };

  return (
    <Drawer title={title} placement={placement} visible={isVisible} closable={closable} onClose={handleCloseDrawer}>
      <Spin spinning={isLoading}>{children}</Spin>
    </Drawer>
  );
};

SideDrawer.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  closable: PropTypes.bool.isRequired,
  onCloseDrawer: PropTypes.func.isRequired,
};

export default SideDrawer;
