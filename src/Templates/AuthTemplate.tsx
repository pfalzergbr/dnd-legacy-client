import AuthNav from '../Components/Auth/AuthNav';

export interface AuthTemplateProps {
  children: React.ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <main>
      <AuthNav />
      {children}
    </main>
  );
};

export default AuthTemplate;
