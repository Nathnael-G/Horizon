const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        {children}
      </div>
    );
  };
  
  export default AuthLayout;