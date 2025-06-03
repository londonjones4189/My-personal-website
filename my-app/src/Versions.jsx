import Me from "./assets/Me.png"; 

//Three versions of me 
function Versions(){ 
    return (
        <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md">
            <div>
            <img
                src={Me}
                alt="headshot"
                className="w-32 h-32 rounded-full object-cover"
            />
            <button> Developer </button>

            </div>
            <div>
            <img
                src={Me}
                alt="headshot"
                className="w-32 h-32 rounded-full object-cover"
            />
            <button> Writer</button>
            </div>

            <div>
            <img
                src={Me}
                alt="headshot"
                className="w-32 h-32 rounded-full object-cover"
            />
            <button> Designer </button>
            </div>
        </div>
    );
}
export default Versions;

