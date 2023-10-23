// components/Loading.js
const Loading = () => {
  return (
    // <p style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: 'bold', fontSize: '2rem' }}>
    //   Loading...
    // </p>
    <div style={{ position: 'absolute', top: '0%', left: '0%', bottom: '0', right: '0', backgroundColor: '#F5F5F5' }}>
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Loading;
