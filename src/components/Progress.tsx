import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function Progress() {
  // const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  // const handleClickLoading = () => {
  //   setLoading((prevLoading) => !prevLoading);
  // };

  const handleClickQuery = () => {

    // setLoading((prevLoading) => !prevLoading);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = setTimeout(() => {
      setQuery('success');
    }, 4000);
  };


  React.useEffect(() => {
    handleClickQuery()
  },[])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',
      marginTop: '50px',
    marginBottom: '-120px', alignItems: 'center' }}>
      {/* <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box> */}
      {/* <Button onClick={handleClickLoading} sx={{ m: 2 }}>
        {loading ? 'Stop loading' : 'Loading'}
      </Button> */}
      <Box sx={{ height: 40 }}>
        {query === 'success' ? (
          <Typography>Meta Cadastrada!!</Typography>
        ) : (
          <Fade
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </Box>
      {/* <Button onClick={handleClickQuery} sx={{ m: 2 }}>
        {query !== 'idle' ? 'Reset' : 'Simulate a load'}
      </Button> */}
    </Box>
  );
}
