import { use, useState } from "react"



export default function Booking() {
    const [tower, setTower] = useState()
    const [floor, setFloor] = useState()
    const [room, setRomm] = useState()
    const [date, setDate] = useState<Date>()
    const [comment, setComment] = useState()

    function handler(e){
      e.preventDefault()
    }
    return (
        <main className="">
            <form onSubmit={handler}>
                <div>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                    <select>
                        <option></option>
                    </select>
                </div>
                <div>
                  <button type="submit">Booking</button>
                </div>
            </form>
        </main>
    )
}
