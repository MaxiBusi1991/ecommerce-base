import Spinner from 'react-bootstrap/Spinner';

function LoadingBox() {
  return (
    <Spinner animation="grow" role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  )
}

export default LoadingBox