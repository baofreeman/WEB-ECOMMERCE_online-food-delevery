function Loader() {
    return (
        <div className="min-h-fit flex flex-col shadow-sm rounded-xl">
            <div className="flex flex-auto flex-col justify-center items-center">
                <div className="flex justify-center">
                    <div
                        className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                        role="status"
                        aria-label="loading"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
