// NextJs components
import type { NextPage } from 'next';
// Material UI components
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
// Own components
import { Layout } from '../components/layouts';
import { NewEntry, EntryList } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home'>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={4}
        >
          <Card
            sx={{ height: 'calc(100vh - 90px)' }}
            className='entries-list-container'
          >
            <CardHeader title={'Pending'} />

            {/* add new entry */}
            <NewEntry />

            {/* list entries */}
            <EntryList status='pending' />
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >
          <Card
            sx={{ height: 'calc(100vh - 90px)' }}
            className='entries-list-container'
          >
            <CardHeader title={'In progress'} />

            {/* list entries */}
            <EntryList status='in-progress' />
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >
          <Card
            sx={{ height: 'calc(100vh - 90px)' }}
            className='entries-list-container'
          >
            <CardHeader title={'Completed'} />

            {/* list entries */}
            <EntryList status='finished' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
