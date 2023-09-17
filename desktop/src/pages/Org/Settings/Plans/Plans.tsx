import { Check } from "@phosphor-icons/react";

const Plans: React.FunctionComponent = () => {
    return (
        <div className="relative left-[88px] overflow-auto mb-12 font-light text-white flex flex-col p-24 w-[calc(100vw-88px)] lg:w-[calc(100vw-18rem)] h-screen duration-300 lg:left-[18rem]">
            <div className="px-24">
                <div>
                    <p className="text-2xl">Plans</p>
                    <p className="text-sm text-gray-100/50">You are currently on the Free plan. If you would like to speak to our sales team, <span className="text-blue-500">Contact us</span></p>
                </div>
                <div className="w-full h-0.5 bg-gray-100/10 mt-4">

                </div>
            </div>
            <div className="lg:flex hidden flex-col p-24  items-center w-full h-full">
                <div className="flex flex-row gap-8 w-full">
                    <div className="flex-grow min-w-[25%] max-w-[25%]">

                    </div>
                    <div className="flex flex-col justify-center flex-grow max-w-[25%] px-4">
                        <p>Free</p>
                        <div className=" flex flex-row gap-1 items-center">
                            <p>$0</p>
                            <p className="text-xs text-gray-100/50">per user/month</p>
                        </div>
                        <div className="w-full h-auto rounded border border-gray-100/20 text-white/20 items-center justify-center flex font-light text-sm py-1 mt-4">
                            Current plan
                        </div>
                    </div>
                    <div className="flex flex-col justify-center flex-grow max-w-[25%] px-4">
                        <p>Plus</p>
                        <div className=" flex flex-row gap-1 items-center">
                            <p>$5</p>
                            <p className="text-xs text-gray-100/50">per user/month</p>
                        </div>
                        <div className="w-full h-auto rounded bg-blue-500 cursor-pointer hover:bg-opacity-50 items-center justify-center flex font-light text-sm py-1 mt-4">
                            Upgrade
                        </div>
                    </div>
                    <div className="flex flex-col justify-center flex-grow max-w-[25%] px-4">
                        <p className="flex flex-col">Open-source <span className="text-xs">(self-hosted)</span></p>
                        <div className=" flex flex-row gap-1 items-center">
                            <p>$0</p>
                            <p className="text-xs text-gray-100/50">per user/month</p>
                        </div>
                        <div className="w-full h-auto rounded border border-gray-100/20 text-white/20 items-center justify-center flex font-light text-sm py-1 mt-4">
                            GitHub
                        </div>
                    </div>
                </div>
                <div className="w-full h-0.5 bg-gray-100/10 mt-4">

                </div>
                <div className="flex flex-row gap-6 w-full -mt-2">
                    <div className="flex flex-col flex-grow  max-w-[25%] py-4">
                        <div className="w-full text-sm mt-2">
                            Usage
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            Members
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            File upload size
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            File upload volume
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            Issues (excluding Archived)
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow  max-w-[25%] py-4">
                        <div className="w-full text-sm mt-2 py-2.5">

                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">150MB</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">10GB per month</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">300</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow  max-w-[25%] py-4">
                        <div className="w-full text-sm mt-2 py-2.5">

                        </div>
                        <div className="w-full text-sm text-blue-400 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-blue-400 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-blue-400 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-blue-400 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow  max-w-[25%] py-4">
                        <div className="w-full text-sm mt-2 py-2.5">

                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">150MB</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">10GB per month</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">300</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-6 w-full -mt-2">
                    <div className="flex flex-col flex-grow  max-w-[25%] py-4">
                        <div className="w-full text-sm mt-2">
                            Features
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            Issues, projects and cycles
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            Intergrations
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            API an Webhook access
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            Import and export
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            Private teams
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2">
                            Guest accounts
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow min-w-[24%] max-w-[25%] py-4">
                        <div className="w-full text-sm mt-2 py-2.5">

                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-transparent">Nothing</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-transparent">Nothing</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-transparent">Nothing</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-transparent">Nothing</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check className="text-transparent"/>
                            <p className="text-transparent">Nothing</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check className="text-transparent"/>
                            <p className="text-transparent">Nothing</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow  max-w-[25%] py-4">
                        <div className="w-full text-sm mt-2 py-2.5">

                        </div>
                        <div className="w-full text-sm text-blue-400 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-blue-400 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-blue-400 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-blue-400 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow  max-w-[25%] py-4">
                        <div className="w-full text-sm mt-2 py-2.5">

                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">Unlimited</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">150MB</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">10GB per month</p>
                        </div>
                        <div className="w-full text-sm text-gray-100/50 mt-1 border-b border-gray-100/20 py-2 flex flex-row gap-2 items-center">
                            <Check/>
                            <p className="text-white">300</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plans;