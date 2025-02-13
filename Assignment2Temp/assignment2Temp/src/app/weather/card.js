const Card = ({ children, className }) => (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
  
  const CardContent = ({ children }) => <div className="p-2">{children}</div>;
  
  export { Card, CardContent };