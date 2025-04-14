import {useState} from "react"


export default function App() {
    const [color, setColor] = useState("black")

    return (<div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className={"flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"}>

                <button
                    onClick={() => setColor("red")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-red-500"
                >Red
                </button>

                <button
                    onClick={() => setColor("blue")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-blue-500"
                >Blue
                </button>

                <button
                    onClick={() => setColor("green")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-green-500"
                >Green
                </button>


                <button
                    onClick={() => setColor("olive")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                    style={{backgroundColor: "olive"}}
                >Olive
                </button>

                <button
                    onClick={() => setColor("purple")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-purple-700"
                >Purple
                </button>

                <button
                    onClick={() => setColor("gray")}
                    className="outline-none px-4 py-1 rounded-full text-white bg-gray-700 shadow-xl"
                >Gray
                </button>

                <button
                    onClick={() => setColor("orange")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                    style={{backgroundColor: "orange"}}
                >Orange
                </button>

                <button
                    onClick={() => setColor("maroon")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                    style={{backgroundColor: "maroon"}}
                >Maroon
                </button>

                <button
                    onClick={() => setColor("#660033")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                    style={{backgroundColor: "#660033"}}
                >Burgundy
                </button>

                <button
                    onClick={() => setColor("cyan")}
                    className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-cyan-500"
                >Cyan
                </button>

            </div>
        </div>
    </div>)
}

