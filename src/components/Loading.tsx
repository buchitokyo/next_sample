import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

const Loading = () => {

  return (
    <Container maxWidth="xs">
    <Box
        width={1}
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
        <CircularProgress color="inherit" />
    </Box>
    </Container>
  )
};

export default Loading;