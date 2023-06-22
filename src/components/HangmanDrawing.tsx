const BASE = (
  <div key='BASE' style={
    {
      position: 'absolute',
      height: '10px',
      width: '60%',
      backgroundColor: '#777',
      borderRadius: '8px',
      bottom: 0,
      left: 0
    }
  }></div>
)

const POLE = (
  <div key='POLE' style={
    {
      position: 'absolute',
      height: '100%',
      width: '10px',
      backgroundColor: '#777',
      borderRadius: '8px',
      left: '23%',
    }
  }></div>
)

const TOP = (
  <div key='TOP' style={
    {
      position: 'absolute',
      height: '10px',
      width: '50%',
      backgroundColor: '#777',
      borderRadius: '8px',
      left: '23%',
    }
  }></div>
)

const CORNER = (
  <div key='CORNER' style={
    {
      position: 'absolute',
      height: '10px',
      width: '50px',
      backgroundColor: '#777',
      top: '20px',
      left: '23%',
      rotate: '-45deg'
    }
  }></div>
)

const ROPE = (
  <div key='ROPE' style={
    {
      position: 'absolute',
      height: '60px',
      width: '10px',
      backgroundColor: '#777',
      borderRadius: '8px',
      left: '70%',
    }
  }></div>
)

const HEAD = (
  <div key='HEAD' style={
    {
      position: 'absolute',
      height: '30px',
      width: '30px',
      border: '5px solid #777',
      borderRadius: '50%',
      top: '55px',
      left: '65%',
    }
  }></div>
)

const BODY = (
  <div key='BODY' style={
    {
      position: 'absolute',
      height: '80px',
      width: '5px',
      backgroundColor: '#777',
      borderRadius: '8px',
      top: '90px',
      left: '71%',
    }
  }></div>
)

const DRAWING_PARTS = [ BASE, POLE, TOP, CORNER, ROPE, HEAD, BODY ]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return ( 
    <div style={{ position: 'relative', width: '300px', height: '300px', margin: '80px auto 0' }}>
      {DRAWING_PARTS.slice(0, numberOfGuesses)}
      {/* {DRAWING_PARTS} */}
    </div>
  );
}

export default HangmanDrawing;