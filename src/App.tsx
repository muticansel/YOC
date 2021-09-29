import React from 'react';
import { Content } from './components/Content/Content';
import { content1, content2, content3 } from './data/data';

export const App: React.FunctionComponent = () => (
  <div>
    <header className="header">
      <h2>
        VIS.X <sup>&reg;</sup>
      </h2>

      <p>
        VIS.X is a new and unique kind of advertising technology that enables
        efficient execution of media and high impact ad products at scale.
        VIS.X wraps the inventory in a holistic auction offering all available
        products in one transaction to buyers, consequently optimizing the
        bidstream. YOC has developed this platform to unlock the real value of
        digital advertising – making VIS.X the go-to-platform for high impact
        programmatic advertising.
      </p>
    </header>
    <Content contents={content1} />
    <div style={{padding: "2em", backgroundColor: "#ccc", textAlign: "center"}}>
      Replace this element with ad unit
    </div>
    <div className="header">
      <h2>About YOC</h2>
    </div>
    <Content contents={content2} />

    <div className="header">
      <h2>About our products</h2>

      <p>
        YOC’s proprietary products deliver highly effective advertising,
        combining cutting-edge technology with best practice in usability. We
        enable exciting and engaging advertising for users and advertisers.
      </p>
    </div>
    <Content contents={content3} />
  </div>
);
