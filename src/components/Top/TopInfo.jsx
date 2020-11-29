/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Header } from 'semantic-ui-react';
import { injectIntl, FormattedHTMLMessage } from 'react-intl';
import { Modal } from 'antd';

import LanguageSwitch from './LanguageSwitch';
import InfoIcon from '../../assets/info';
import Logo from '../../assets/logo';

import './TopInfo.scss';

const TopInfo = ({ intl }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="top-info-button">
        <div className="info-div" role="button" tabIndex="0" onClick={() => setVisible(true)}>
          <InfoIcon />
        </div>
        {/* <a className="patreon" href="https://www.patreon.com/helpmap_io" target="_blank" rel="noopener noreferrer">
          Patreon
        </a> */}
        {/* <a className="onova" href="https://onova.co/helpmap" target="_blank" rel="noopener noreferrer">
          Підтримати
        </a> */}
      </div>
      <div className="top-info-body">
        <Modal
          className="info-modal"
          title={intl.formatMessage({ id: 'Info.Title' })}
          visible={visible}
          onCancel={() => setVisible(false)}
          footer={null}
        >
          <FormattedHTMLMessage id="Info" />
        </Modal>
        <Header as="h2" icon size="medium">
          <Logo className="logo" />
          <Header.Subheader className="tagline">
            {intl.formatMessage({ id: 'Tagline' })}
          </Header.Subheader>
        </Header>
        <div className="language-switch">
          <LanguageSwitch />
        </div>
      </div>
    </>
  );
};

export default injectIntl(TopInfo);
