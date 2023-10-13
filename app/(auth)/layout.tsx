const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex items-center h-screen bg-gradient-to-r from-red-500 to-pink-500 to-purple-500">
        <div className="mx-auto ">{children}</div>
      </div>
    );
  };
  
  export default AuthLayout;