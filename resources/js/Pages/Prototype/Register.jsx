import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Register() {
    return (
        <>
            <Head title="Register" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
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
                                    forInput="fullname"
                                    value="Full Name"
                                    />
                                {/* <input type="text" name="fullname"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Your fullname..." value="Angga React" /> */}
                                <Input
                                    type="text"
                                    name="fullname"
                                    placeholder="Yujang Tampan"
                                    variant="primary"
                                />
                            </div>
                            <div>
                                <Label
                                    forInput={"email"}
                                    value="Email"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="yujang@gmail.com"
                                    variant="primary"
                                />
                            </div>
                            <div>
                                <Label
                                    forInput={"password"}
                                    value="Password"
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="*******"
                                    variant="primary"
                                />

                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px] content-between">
                            <Button
                                type="button"
                                variant="primary">
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </Button>


                                <Link href={route("prototype.login")} className="rounded-2xl text-center border border-green-800" >
                            <Button type="button" variant="black" >
                                    <span className="text-base text-center text-white">
                                    Sign In to My Account
                                </span>
                            </Button>
                                </Link>

                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}
