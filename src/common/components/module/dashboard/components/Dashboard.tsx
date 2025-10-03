import React from 'react';

import Hr from '@/common/components/elements/Hr';

import Github from './github';
import Heading from './Heading';
import { Spotify } from './spotif';
import Wakatime from './wakatime/Wakatime';

const Dashboard = () => {
  return (
    <>
      <Heading></Heading>
      <Hr></Hr>
      <Wakatime></Wakatime>
      <Github></Github>
      <Hr></Hr>
      <Spotify></Spotify>
    </>
  );
};

export default Dashboard;
