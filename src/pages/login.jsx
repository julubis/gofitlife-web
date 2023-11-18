function Login() {
  document.title = 'GoFitLife | Login';

  return (
    <main className="flex">
      <section className="hidden w-full min-h-screen pt-28 px-[5.5%] bg-emerald-50 md:flex">
        <img src="assets/Eating healthy food-amico.svg" alt=""/>
      </section>
      <section className="w-full min-h-screen pt-28 px-[5.5%]">
        <form className="text-center shadow rounded-lg w-fit min-w-sm p-10 mx-auto">
          <h2 className="text-medium text-lg">Welcome</h2>
          <p className="text-normal text-sm text-gray-500">Welcome back! Please enter your details</p>
          <div className="form-control">
            <label htmlFor="email-input" className="text-medium text-5">Email</label>
            <div className="relative">
              <i className="fa fa-envelope"></i>
              <input type="email" name="email" id="email-input" className="p-2.5 rounded-lg text-sm border-emerald-400"/>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="password-input" className="text-medium text-5">Password</label>
            <div className="relative">
              <i className="fa fa-lock"></i>
              <input type="password" name="password" id="password-input"/>
            </div>
          </div>
          <div className="form-control-2">
            <input type="checkbox" value="" id="remember"/>
            <label htmlFor="remember" className="text-medium text-6">Remember me</label>
          </div>
          <button type="submit" className="btn text-medium">Sign In</button>
          <p className="small text-normal text-6">Don&apos;t you have an account? <a href="/#/register">Sign Up</a></p>
        </form>
      </section>
    </main>
  );
}

export default Login;