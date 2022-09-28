import { getProviders, signIn } from "next-auth/react";
const signin = ({ providers }) => {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <div className="hidden md:inline flex-1 h-full">
        <img src="/auth_logo.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="flex-1 h-full flex flex-col justify-center p-2 md:p-6">
        <img src="/twitter.png" alt="" className="w-[60px] h-[60px] mb-4" />
        <p className="text-[35px] md:text-[60px] font-bold mb-1 md:mb-4 whitespace-nowrap">
          Happening now
        </p>
        <p className="text-lg md:text-xl font-bold mb-8">Join Twitter today.</p>
        <button
          className="py-1 px-4 rounded-sm bg-blue-500 text-white w-max"
          onClick={() => signIn(providers.google.id, { callbackUrl: "/" })}
        >
          SignIn with {providers.google.name}
        </button>
        <p className=" w-150px md:w-[280px] text-sm mt-2">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
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
