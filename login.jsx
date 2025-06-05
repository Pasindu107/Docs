// import Login from "@/features/auth/components/Login";
// import logo from "@/assets/CFc.png";

// import loginImg from "@/assets/loginImg4.png";
// const LoginPage = () => {
// return (
// <div className="flex flex-col md:flex-row min-h-screen">
// {/_ Left Side with full background image _/}
// <div
// className="relative w-full md:w-1/2 min-h-[250px] flex flex-col justify-center px-3 sm:px-6 md:px-12 py-4 md:py-10"
// style={{
//           backgroundImage: `url(${loginImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "right",
//         }}
// >
// <div className="absolute inset-0 bg-black/0 z-0" />
// <div className="h-full flex flex-col relative z-10 min-h-[180px]">
// <div className="flex justify-end">
// {" "}
// <img
// src={logo}
// alt="Logo"
// className="mb-4 sm:mb-6"
// style={{ width: 180, height: 50 }}
// />
// </div>

// {/_ <div className=" text-right">
// {" "}
// <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg mt-2">
// Welcome to CFC Healthcare ERP
// </h1>
// <p className="text-white text-xs sm:text-base md:text-lg mb-2 sm:mb-4 lg:mb-8 drop-shadow-lg">
// Empowering Healthcare Operations
// </p>
// </div> _/}
// </div>
// </div>
// {/_ Right Side _/}
// <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0 px-2 flex-col bg-white">
// <div className="w-full max-w-md px-4 sm:px-6 md:px-8 bg-card rounded-lg shadow-lg">
// <Login isFromPopup={false} />
// </div>
// </div>
// </div>
// );
// };

// export default LoginPage;

//------------------------------------------------------------------------------------------------------------

// import Login from "@/features/auth/components/Login";
// import loginImg from "@/assets/loginImg4.png";

// const LoginPage = () => {
// return (
// <div className="relative min-h-screen  overflow-hidden">
// {/_ Background image or gradient _/}
// <div className="fixed inset-0 z-0">
// {/_ Optional background image _/}
// {/_ <div
// style={{
//             backgroundImage: `url(${loginImg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "right",
//             backgroundRepeat: "no-repeat",
//           }}
// className="w-full h-full"
// /> _/}
// <div className="absolute inset-0" />
// </div>

// {/_ Main Content _/}
// <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">
// {/_ Left Panel _/}
// <div className="hidden md:flex flex-col justify-center items-center p-12 space-y-8">
// <div className="text-center max-w-md">
// <h1 className="text-4xl font-extrabold text-teal-700 drop-shadow-sm">
// Welcome to CFC Healthcare ERP
// </h1>
// <p className="mt-3 text-lg text-teal-500 font-medium drop-shadow-sm">
// Empowering Healthcare Operations
// </p>
// </div>
// <img
// src={loginImg}
// alt="Healthcare ERP Illustration"
// className="w-[320px] lg:w-[420px] object-contain"
// />
// </div>

// {/_ Right Panel - Login _/}
// <div className="flex justify-center items-center p-6 sm:p-10 bg-white/100">
// <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 space-y-6">
// <h2 className="text-2xl font-bold text-center text-teal-600">
// Login to Your Account
// </h2>
// <Login isFromPopup={false} />
// </div>
// </div>
// </div>
// </div>
// );
// };

// export default LoginPage;

//------------------------------------------------------------------------------------------------

// import Login from "@/features/auth/components/Login";
// import logo from "@/assets/CFc.png";

// import loginImg from "@/assets/loginImg2.jpg";
// const LoginPage = () => {
// return (
// <div className="flex flex-col md:flex-row min-h-screen">
// {/_ Left Side with full background image _/}
// <div
// className="relative w-full md:w-1/2 min-h-[250px] flex flex-col justify-center px-3 sm:px-6 md:px-12 py-4 md:py-10"
// style={{
//           backgroundImage: `url(${loginImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "left",
//         }}
// >
// <div className="absolute inset-0 bg-black/5 z-0" />
// <div className="h-full flex flex-col   relative z-10 min-h-[180px] mt-5">
// <div className="flex justify-end">
// {" "}
// <img
// src={logo}
// alt="Logo"
// className="mb-4 sm:mb-2"
// style={{ width: 150, height: 40 }}
// />
// </div>

// <div className=" text-right">
// {" "}
// <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg mt-2">
// Welcome to CFC Healthcare ERP
// </h1>
// <p className="text-white text-xs sm:text-base md:text-lg mb-2 sm:mb-4 lg:mb-8 drop-shadow-lg">
// Empowering Healthcare Operations
// </p>
// </div>
// </div>
// </div>
// {/_ Right Side _/}
// <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0 px-2 flex-col">
// <div className="w-full max-w-md px-4 sm:px-6 md:px-8 bg-card rounded-lg shadow-md">
// <Login isFromPopup={false} />
// </div>
// </div>
// </div>
// );
// };

// export default LoginPage;

// import Login from "@/features/auth/components/Login";
// import loginImg from "@/assets/loginImg4.png";

// const LoginPage = () => {
// return (
// <div className="dark:bg-teal-950">
// <div className="flex items-center justify-center h-screen p-4">
// {/_ Main Content _/}
// <div className=" z-10 grid grid-cols-1 md:grid-cols-2 w-[1000px] h-[600px]">
// {/_ Left Panel _/}
// <div className="hidden md:flex flex-col justify-center items-center p-12 space-y-8 bg-gradient-to-br from-teal-900 to-teal-500  lg:rounded-l-2xl">
// <div className="text-center">
// <h1 className="text-4xl font-extrabold text-white drop-shadow-sm">
// Welcome to CFC Healthcare ERP
// </h1>
// <p className="mt-3 text-lg text-white/60 font-medium drop-shadow-sm">
// Empowering Healthcare Operations
// </p>
// </div>
// <img
// src={loginImg}
// alt="Healthcare ERP Illustration"
// className="w-[200px] lg:w-[300px] object-contain "
// />
// </div>

// {/_ Right Panel - Login _/}
// <div className="flex justify-center items-center p-6 sm:p-10 bg-white rounded-lg lg:rounded-r-2xl">
// <div className="w-full max-w-md bg-white rounded-3xl sm:p-10 space-y-6">
// <Login isFromPopup={false} />
// </div>
// </div>
// </div>
// </div>
// </div>
// );
// };

// export default LoginPage;

import { motion } from "framer-motion";
import Login from "@/features/auth/components/Login";
import loginImg from "@/assets/loginImg4.png";

const LoginPage = () => {
return (
<div className="min-h-screen flex items-center justify-center bg-white dark:bg-teal-950 px-4 py-8">
<div className="w-full max-w-6xl bg-white dark:bg-teal-900 rounded-2xl overflow-hidden shadow-xl grid grid-cols- lg:grid-cols-2">
{/_ Left Panel _/}
<motion.div
initial={{ opacity: 0, x: -40 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
className="hidden md:flex flex-col justify-center items-center flex-1 p-8 lg:p-12 bg-gradient-to-br from-teal-900 to-teal-600 text-white" >
<div className="text-center">
<h1 className="text-4xl font-extrabold text-white drop-shadow-sm">
Welcome to CFC Healthcare ERP
</h1>
<p className="mt-3 text-lg text-white/60 font-medium drop-shadow-sm">
Empowering Healthcare Operations
</p>
</div>
<motion.img
src={loginImg}
alt="Healthcare ERP"
className="mt-8 w-40 lg:w-70 cursor-pointer"
draggable={false}
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
whileHover={{
              scale: 1.05,
              y: -8,
            }}
transition={{
              type: "spring",
              stiffness: 300,
              damping: 8, // lower damping = more bounce
            }}
/>
</motion.div>

        {/* Right Panel - Login */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex justify-center items-center p-6 sm:p-10 bg-white lg:rounded-r-2xl"
        >
          <div className="w-full max-w-md bg-white rounded-3xl sm:p-10 space-y-6">
            <Login isFromPopup={false} />
          </div>
        </motion.div>
      </div>
    </div>

);
};

export default LoginPage;
