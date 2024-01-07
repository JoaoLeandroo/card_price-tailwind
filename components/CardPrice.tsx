const CardPrice = () => {
    return ( 
        <div className="w-[300px] h-[400px] mx-auto border border-slate-300 p-8 shadow-lg rounded-3xl bg-slate-100 cursor-pointer transition duration-500 ease-in-out hover:bg-slate-200">
            <div>
                <h1 className="font-bold text-2xl">Most Popular</h1>
                <div className="mt-2">
                    <p className="font-semibold text-slate-600 uppercase">Premium</p>
                    <h2 className="font-bold text-6xl">29 <span className="text-lg">,99 <span className="text-[12px]">ano</span></span></h2>
                    <ul className="mt-6 flex flex-col gap-y-3">
                        <li className="font-semibold text-slate-400">* Free templates</li>
                        <li className="font-semibold text-slate-400">* Free depoiments</li>
                        <li className="font-semibold text-slate-400">* 1200 minutes month</li>
                        <li className="font-semibold text-slate-400">* Promotions Firist</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default CardPrice;