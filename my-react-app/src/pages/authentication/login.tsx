import LoginForm from '@/components/authentication-components/login-form';
import RegistrationForm from '@/components/authentication-components/registration-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="shadow px-6 py-4 rounded-2xl">
        Login Page
        <LoginForm />
      </div>
      <div className="shadow px-6 py-4 rounded-2xl">
        Registration Page
        <RegistrationForm />
      </div>
    </div>
  );
}
