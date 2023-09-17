import Input from "../../../components/core/Input/Input";

const Profile: React.FunctionComponent = () => {
    return (
        <div className="relative left-[88px] overflow-auto mb-12 font-light text-white flex flex-col p-24 w-[calc(100vw-88px)] lg:w-[calc(100vw-18rem)] h-screen duration-300 lg:left-[18rem]">
            <div className="px-24">
                <div>
                    <p className="text-2xl">Profile</p>
                    <p className="text-sm text-gray-100/50">Manage your profile</p>
                </div>
                <div className="w-full h-0.5 bg-gray-100/10 mt-4">

                </div>
                <div className="flex flex-col mt-12">
                    <div className="flex flex-col gap-4">
                        <p className="text-white/80 font-light text-sm">Profile picture</p>
                        <div className="h-40 w-40 rounded-full bg-blue-400 flex items-center justify-center text-6xl hover:bg-opacity-50 duration-300 cursor-pointer">
                            M
                        </div>
                    </div>
                    <div className="flex flex-col py-4">
                        <p className="text-white/80 font-light text-sm">Email</p>
                        <p className="text-gray-500/50 font-light">marques_scripps@outlook.com</p>
                    </div>
                    <div className="flex flex-col py-4 gap-4">
                        <p className="text-white/80 font-light text-sm">Full name</p>
                        <Input type="text"  input={"Marques Scripps"} />
                        <p className="text-white/80 font-light text-sm">Username <span className="opacity-50"> - Nickname or first name, however you want to be called in [name]</span></p>
                        <Input type="text" input="marques" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;