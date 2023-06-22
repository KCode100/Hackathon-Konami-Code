const BASE = () => (
  <div style={
    {
      position: 'absolute',
      height: '10px',
      width: '50%',
      backgroundColor: 'black',
      bottom: 0,
      left: 0
    }
  }></div>
)

const POLE = () => (
  <div style={
    {
      position: 'absolute',
      height: '100%',
      width: '10px',
      backgroundColor: 'black',
      left: '25%',
    }
  }></div>
)

const TOP = () => (
  <div style={
    {
      position: 'absolute',
      height: '10px',
      width: '50%',
      backgroundColor: 'black',
      left: '25%',
    }
  }></div>
)

const HangmanDrawing = ({}) => {
  return ( 
    <div style={{ position: 'relative', width: '300px', height: '300px', margin: '80px auto 0' }}>
      <BASE />
      <POLE />
      <TOP />
    </div>
  );
}

export default HangmanDrawing;