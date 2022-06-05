import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <section class="py-24 md:py-32 bg-white">
            <div class="container px-4 mx-auto">
                <div class="max-w-sm mx-auto">
                    <div class="mb-6 text-center">
                        <Link class="inline-block mb-6" to="/">
                            <img
                                class="h-16"
                                src="https://shuffle.dev/flex-ui-assets/logos/flex-circle-green.svg"
                                alt=""
                            />
                        </Link>
                        <h3 class="mb-4 text-2xl md:text-3xl font-bold">
                            Sign in to your account
                        </h3>
                        <p class="text-lg text-coolGray-500 font-medium">
                            Start your demo version
                        </p>
                    </div>
                    <form action="">
                        <div class="mb-6">
                            <label
                                class="block mb-2 text-coolGray-800 font-medium"
                                for=""
                            >
                                Email
                            </label>
                            <input
                                class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                type="email"
                                placeholder="dev@shuffle.dev"
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="block mb-2 text-coolGray-800 font-medium"
                                for=""
                            >
                                Password
                            </label>
                            <input
                                class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                type="password"
                                placeholder="************"
                            />
                        </div>
                        <div class="flex flex-wrap items-center justify-between mb-6">
                            <div class="w-full md:w-1/2">
                                <label class="relative inline-flex items-center">
                                    <input
                                        class="form-checkbox appearance-none"
                                        type="checkbox"
                                    />
                                    <img
                                        class="absolute top-1/2 transform -translate-y-1/2 left-0"
                                        src="https://shuffle.dev/flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                                        alt=""
                                    />
                                    <span class="ml-7 text-xs text-coolGray-800 font-medium">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div class="w-full md:w-auto mt-1">
                                <Link
                                    class="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                                    to="/"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <Link
                            class="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                            to="/"
                        >
                            Sign In
                        </Link>
                        <p class="text-center">
                            <span class="text-xs font-medium">
                                Don’t have an account?
                            </span>
                            <Link
                                class="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                                to="/"
                            >
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
