import { useState, useEffect } from "react";
import { imageSignPage } from "../../Data";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // تسجيل حساب جديد
  const signUp = (username, password) => {
    // جلب المستخدمين المسجلين سابقاً
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // التحقق إذا كان اسم المستخدم مسجل بالفعل
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setError("User already exists!");
      return false;
    }

    // إضافة المستخدم الجديد
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    alert("Sign up successful!");
    return true;
  };
  const navigate = useNavigate();
  // التعامل مع الضغط على زر "Sign In"
  const handleSignUp = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    const success = signUp(username, password);

    if (success) {
      navigate("/login"); // التنقل بعد نجاح التسجيل
    }

    if (!success) {
      // إذا حدث خطأ، يمكنك التعامل معه هنا
      console.log("Error: User already exists.");
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
    <div className="w-maxWidth h-[170vh] sm:max-md:h-[100vh] sm:max-md:w-widthMobile flex flex-row sm:max-md:flex-wrap justify-between items-center">
      <div className="flex h-[100%] sm:max-md:h-[50%] flex-1 items-center flex-col sm:max-md:px-[35px]  py-12 lg:px-8">
        <div className="mt-10 w-[50%] sm:max-md:w-widthMobile">
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
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
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
                type="button" // تعديل نوع الزر إلى button لمنع إعادة تحميل الصفحة
                onClick={handleSignUp} // استدعاء دالة تسجيل الحساب
                className="flex w-[300px] justify-center rounded-md bg-bgTheardSection transition-all ease-in-out duration-700 hover:bg-hoverButton px-3 py-1.5 text-sm font-semibold leading-6 text-firstTextColor shadow-sm hover:bg-indigo-500"
              >
                Sign up
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* عرض خطأ عند الحاجة */}
          </form>

          <p className="mt-10 text-sm sm:max-md:mr-[95px] text-firstTextColor mr-[40px] text-center">
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
            sm:max-md:w-[100%]

      rounded-tl-[100px] 
      rounded-bl-[100px] 
      mt-4 
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
