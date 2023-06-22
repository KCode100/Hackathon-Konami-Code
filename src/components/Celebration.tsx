import ConfettiExplosion from 'react-confetti-explosion';

const Celebration = () => {
  return ( 
    <div className='confetti-explosion'>
      <ConfettiExplosion 
        force={0.8}
        duration={3000}
        particleCount={250}
        width={1600}
      />
    </div>
  );
}
 
export default Celebration;