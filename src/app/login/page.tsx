import { Form } from './components';

export const metadata = {
  title: 'Login'
};

export default async function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col justify-center items-center max-w-md">
        <h1 className="text-white text-4xl font-bold mb-11 text-center">
          Faça login para acessar a documentação
        </h1>
        <Form />
      </div>
    </div>
  );
}
