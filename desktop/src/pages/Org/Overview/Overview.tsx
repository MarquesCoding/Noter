const Overview: React.FunctionComponent = () => {
    return (
        <div className="relative left-[88px] overflow-auto mb-12 font-light text-white flex flex-col p-24 w-[calc(100vw-88px)] lg:w-[calc(100vw-18rem)] h-screen duration-300 lg:left-[18rem]">
            <div className="px-24">
                <div>
                    <p className="text-2xl">Overview</p>
                    <p className="text-sm text-gray-100/50">See statistics and information about your organisation.</p>
                </div>
                <div className="w-full h-0.5 bg-gray-100/10 mt-4">

                </div>
                <div className="pt-4 flex flex-row gap-4">
                    <div className="px-4 py-2 rounded-lg border border-gray-400/30 w-fit h-auto hover:bg-gray-400/20 cursor-pointer">
                        <div className="flex flex-row gap-1">
                            <p className="text-3xl text-white">44MB</p>
                            <p className="text-sm text-gray-500/80">/ 10GB</p>
                        </div>
                        Storage used
                    </div>
                    <div className="px-4 py-2 rounded-lg border border-gray-400/30 w-fit h-auto hover:bg-gray-400/20 cursor-pointer">
                        <div className="flex flex-row gap-1">
                            <p className="text-3xl text-white">4</p>
                            <p className="text-sm text-gray-500/80">/ 300</p>
                        </div>
                        Issues created
                    </div>
                    <div className="px-4 py-2 rounded-lg border border-gray-400/30 w-fit h-auto hover:bg-gray-400/20 cursor-pointer">
                        <div className="flex flex-row gap-1">
                            <p className="text-3xl text-white">4</p>
                            <p className="text-sm text-gray-500/80">/ Unlimited</p>
                        </div>
                        Members
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Overview;