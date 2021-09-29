import React from 'react';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { content1, content2, content3 } from './data/content';
import { header1, header2, header3 } from './data/header';

export const App: React.FunctionComponent = () => (
  <div>
    <Header header={header1.header} paragraph={header1.paragraph} isSpecialHeader />
    <Content contents={content1} />
    <div style={{ padding: "2em", backgroundColor: "#ccc", textAlign: "center" }}>
      Replace this element with ad unit
    </div>
    <Header header={header2.header} />
    <Content contents={content2} />

    <Header header={header3.header} paragraph={header3.paragraph} />
    <Content contents={content3} />
  </div>
);
