import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Login() {
    return (
        <>
            <Head title="Login" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                {/* <img src="/images/moonton-white.svg" alt="" /> */}
                <div className="my-[70px]">
                    <div className="font-semibold text-[26px] mb-3">
                        Welcome Back
                    </div>
                    <p className="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br/>
                        the better insight for your life
                    </p>
                </div>
                <form className="w-[370px]">
                    <div className="flex flex-col gap-6">
                        <div>
                            <Label
                                forInput={'email'}
                                value={'Emaile'}
                            />
                            {/* <input type="email" name="email"
                                className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-green-500 focus:outline-none"
                                placeholder="Email Address" /> */}
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email ya"
                                variant="primary"
                            />
                        </div>
                        <div>
                            <Label
                                forInput={"password"}
                                value={'Password'}
                                />
                            {/* <input type="password" name="password"
                                className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-green-500 focus:outline-none"
                                placeholder="Password" /> */}

                            <Input
                                type="password"
                                name="password"
                                placeholder="password ya" />
                        </div>
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">




                        <Link href={route("prototype.dashboard")}  className="rounded-2xl text-center border bg-green-800 border-green-800">
                            <Button type="button" variant="primary">
                                 <span className="text-base font-semibold">
                                            Start Watching
                                </span>
                            </Button>
                        </Link>

                        <Link href={route("prototype.register")} className="rounded-2xl text-center border border-green-800" >
                            <Button type="button" variant="black">
                                <span className="text-base text-white">
                                    Create New Account
                                </span>
                            </Button>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
        </div>
    </div>
        </>
    )

}
