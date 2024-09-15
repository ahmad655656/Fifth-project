import { useState, useEffect } from "react";
import { imageSignPage } from "../../Data";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // دالة تسجيل الدخول
  const handleLogin = (event) => {
    event.preventDefault();
    // جلب المستخدمين من localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // التحقق مما إذا كان المستخدم موجود
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // تخزين JWT محليًا أو أي نوع من التوكنات (هنا يتم إنشاؤه ببساطة)
      const token = btoa(`${username}:${password}`); // base64 encoding
      localStorage.setItem("authToken", token);
      navigate("/home"); // تحويل المستخدم إلى الصفحة الرئيسية أو الداشبورد
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
  };

  const [image, setImage] = useState(imageSignPage[0]);
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prevI) => (prevI + 1) % imageSignPage.length);
      setImage(imageSignPage[(i + 1) % imageSignPage.length]);
    }, 8000);

    return () => clearInterval(interval);
  }, [i]);

  return (
    <div className="w-maxWidth h-[170vh] sm:max-md:h-[100vh] sm:max-md:w-widthMobile sm:max-md:flex-wrap flex flex-row justify-between items-center">
      <div className="flex h-[100%] sm:max-md:h-[50%] items-center flex-1 flex-col px-6 sm:max-md:px-[35px] py-12 lg:px-8">
        <div className="mt-10 w-[50%] sm:max-md:w-widthMobile ">
          <form
            action="#"
            method="POST"
            className="space-y-6 w-[100%] text-secondTextColor"
          >
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                UserName
              </label>
              <div className="mt-2">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                  className="block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center sm:max-md:w-[78%] w-[90%] justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  className="block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-[300px] justify-center rounded-md bg-bgTheardSection transition-all ease-in-out duration-700 hover:bg-hoverButton px-3 py-1.5 text-sm font-semibold leading-6 text-firstTextColor shadow-sm hover:bg-indigo-500"
              >
                Log in
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* عرض رسالة الخطأ */}
          </form>

          <p className="mt-10 text-sm text-firstTextColor sm:max-md:mr-[95px] mr-[40px] text-center ">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-firstTextColor"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
      <div className="w-[50%] sm:max-md:w-[100%] sm:max-md:mt-[50px] sm:max-md:h-[80%] h-[100%]">
        <img
          src={image}
          alt=""
          className="
          animate-animPhoto
      shadow-lg 
      shadow-shadowPhoto 
      w-[100%] 
      h-[51%] 
      object-cover 
      rounded-tl-[100px] 
      rounded-bl-[100px] 
      mt-4 
      sm:max-md:w-[100%]
      transition 
      z-[-1]
      duration-500 
      ease-in-out 
      transform 
      rotate-x-[0deg]
      hover:rotate-x-6 
      hover:rotate-y-6 
      hover:scale-105 
      hover:shadow-2xl 
      hover:shadow-shadowSignColor"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>
    </div>
  );
}
