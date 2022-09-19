import { getProviders, signIn } from "next-auth/react";
const signin = ({ providers }) => {
  console.log(providers);
  console.log(providers.id);
  return (
    <div className="h-screen w-screen flex ">
      <div className="flex-1 h-full">
        <img
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex-1 h-full flex flex-col justify-center p-6">
        <img src="/twitter.png" alt="" className="w-[60px] h-[60px]" />
        <p className="text-[60px] font-bold mb-4">Happening now</p>
        <p className="text-xl font-bold mb-8">Join Twitter today.</p>
        <button
          className="py-1 px-4 rounded-lg bg-blue-500 text-white w-max"
          onClick={() => signIn(providers.id, { callbackUrl: "/" })}
        >
          SignIn with {providers.google.name}
        </button>
        <p className="w-[280px] text-sm mt-2">
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
