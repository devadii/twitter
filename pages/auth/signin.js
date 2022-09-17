import { getProviders, signIn } from "next-auth/react";
const signin = ({ providers }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <img
        src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
        alt=""
        className="w-[30%] mr-8"
      />
      <div className="w-[30%] ">
        <p className="text-xl font-bold mb-2">Twitter</p>
        <button
          className="py-1 px-4 rounded-lg bg-blue-500 text-white"
          onClick={() => signIn(providers.id, { callbackUrl: "/" })}
        >
          SignIn with {providers.google.name}
        </button>
      </div>
    </div>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
