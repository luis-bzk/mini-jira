import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home'>
      <Typography variant='h1' color={'primary'}>
        Hola coco
      </Typography>
    </Layout>
  );
};

export default HomePage;
