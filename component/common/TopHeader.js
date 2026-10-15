import Close from "../icon/Close";

export default function TopHeader() {
    return (
        <div className="flex flex-row items-center justify-between w-full h-16 px-4 bg-secondary">
            <div className="flex flex-row mx-auto items-center space-x-5">
                <span className="text-sm select-none font-semibold uppercase text-gray-800 dark:text-gray-200">Sezoni i 3 i Think Big</span>
                <span className="w-1.5 h-1.5 select-none rounded-full bg-black-text" />
                <span className="text-sm  select-none  text-gray-800 ">Episodet e reja janë këtu.</span>
                <button className="px-5 bg-primary hover:bg-primary/90 py-2.5 cursor-pointer text-xs font-semibold text-white rounded-full">Shiko tani</button>

            </div>
            <div>
                <Close className="w-6 h-6 cursor-pointer" />
            </div>
            
        </div>
    );
}