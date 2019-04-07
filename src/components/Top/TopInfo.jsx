import React, { useState } from 'react';
import { Header } from 'semantic-ui-react';
import { injectIntl, FormattedHTMLMessage } from 'react-intl';
import { Modal } from 'antd';

import LanguageSwitch from './LanguageSwitch';
import InfoIcon from '../../assets/info';
import Logo from '../../assets/logo';

import './TopInfo.scss';

const TopPanel = ({ intl }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="info-div" onClick={() => setVisible(true)}>
        <InfoIcon />{' '}
      </div>
      <Modal
        title={intl.formatMessage({ id: 'Info.Title' })}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}>
        <FormattedHTMLMessage id="Info" />
      </Modal>
      <Header as="h2" icon size="medium" style={{ margin: '0 auto' }}>
        <Logo />
        <Header.Subheader>{intl.formatMessage({ id: 'Tagline' })}</Header.Subheader>
      </Header>
      <div className="language-switch">
        <LanguageSwitch />
      </div>
    </div>
  );
};

export default injectIntl(TopPanel);
