// export default function Loading() {
//   return <p className="p-2">Now on Loading...</p>;
// }

const Loading: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(220, 220, 220, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
