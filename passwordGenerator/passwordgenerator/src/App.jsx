import { useState, useCallback ,useEffect ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Passsword, setPassword] = useState("");
  // use ref hook
  const PasswordRef = useRef(null)

  const PassswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "01234567";
    if (charAllowed) str += "!@#$%^&*(){}[]/*-_~?^";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassswordToClipboard = useCallback (()=>{
    PasswordRef.current?.select()
    PasswordRef.current?.setSelectionRange(0 , 100)  //range dy skty h k ktni range tk copy krna h
    window.navigator.clipboard.writeText(Passsword)
  },[Passsword])

useEffect (()=>{
  PassswordGenerator()
}, [length , numberAllowed ,charAllowed ,PassswordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-1">
          <input
            type="text"
            value={Passsword}
            className="outline-none w-full py-1 px-3 my-6 rounded-lg"
            placeholder="Passsword"
            readOnly
            ref={PasswordRef}
          />
          <button 
          onClick={copyPassswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charterInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
