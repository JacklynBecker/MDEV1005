const Card = ({ children, className }) => (
    <div className={`${className}`}>
      {children}
    </div>
  );
  
  const CardContent = ({ children }) => <div >{children}</div>;
  
  export { Card, CardContent };