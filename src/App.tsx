import React from 'react';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Video } from './components/Video/Video';
import { content1, content2, content3 } from './data/content';
import { header1, header2, header3 } from './data/header';
import { video } from './data/video';

export const App: React.FunctionComponent = () => (
  <div>
    <Header header={header1.header} paragraph={header1.paragraph} isSpecialHeader />
    <Content contents={content1} />
    <Video source={video.source} />
    <Header header={header2.header} />
    <Content contents={content2} />

    <Header header={header3.header} paragraph={header3.paragraph} />
    <Content contents={content3} />
  </div>
);
