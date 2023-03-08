import { Link } from "react-router-dom";
import { Button, Input } from "../../components/shared";

const Login = () => {
  const submitButton = () => {
    console.log("Login button onClick working");
  };

  return (
    <div className="flex h-10/12 justify-center items-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">LOGIN </h2>

          <form>
            <div className="mb-5">
              <Input
                label="Your email"
                type="text"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-5">
              <Input
                label="Password"
                type="password"
                name="passowrd"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-5">
              <Button width={380} onClick={submitButton}>
                Submit
              </Button>
            </div>
          </form>

          <p className="text-sm text-center">
            New to Jerin Parlor?
            <span className="mx-1">
              <Link className="text-primary" to="/signup">
                Create new account
              </Link>
            </span>
          </p>

          <div className="divider">or</div>
          {/* <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline"
                >Continue with Google</button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
