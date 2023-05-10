import { FormEvent, use, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FLOORS: number[] = Array.from({ length: 25 }, (_, index) => index + 3);
const ROOMS: number[] = Array.from({ length: 10 }, (_, index) => index + 1);

export default function Booking() {
    const [tower, setTower] = useState<'A' | 'B' | undefined>(undefined)
    const [floor, setFloor] = useState<number | undefined>(undefined)
    const [room, setRoom] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date())
    const [comment, setComment] = useState<string | undefined>()

    function handler(e: FormEvent) {
      e.preventDefault(); 
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const fields: { [key: string]: string } = {};
      formData.forEach((value, name) => {
        fields[name as string] = value as string;
      });
      console.log(JSON.stringify(fields));
    }
    
    return (
        <main>
            <form onSubmit={handler}>
                <h1 className="text-center text-2xl py-2">Форма бронирования переговорной:</h1>
                <div className="flex w-full flex-col p-2">
                    <div className="py-2">
                        <label htmlFor="tower">Выберете башню А ли В</label>
                        <select className="p-2 rounded-md w-full border-black border-2" name="tower" id="tower"required value={tower} onChange={ (e)=>setTower(e.target.value as 'A' | 'B') }>
                            <option value={undefined}></option>
                            <option value={'A'}>A</option>
                            <option value={'B'}>B</option>
                        </select>
                    </div>
                    <div className="py-2">
                        <label htmlFor="floor">Выберете этаж 3-27</label>
                        <select className="p-2 rounded-md w-full border-black border-2" name="floor" id="floor" required value={floor} onChange={ (e)=>setFloor(Number(e.target.value)) }>
                            <option value={undefined}></option>
                            {FLOORS.map(el => {
                                return <option key={el}>{el}</option>
                            })}
                        </select>
                    </div>
                    <div className="py-2">
                        {/* Подразумевается что на каждом этаже отсчет начинается с 1 */}
                        <label htmlFor="room">Выберете переговорную 1-10</label>
                        <select className="p-2 rounded-md w-full border-black border-2" name="room" id="room" required value={room}  onChange={ (e)=>setRoom(Number(e.target.value)) }>
                            <option value={undefined}></option>
                            {ROOMS.map(el => {
                                return <option key={el}>{el}</option>
                            })}
                        </select>
                    </div>
                    <div className="py-2">
                        <label htmlFor="date">Выберете дату</label>
                        <DatePicker className="p-2 rounded-md w-full border-black border-2" name="date" id="date" selected={date} onChange={ (date) => setDate(date as Date) } />
                    </div>
                    <div className="py-2">
                        <label htmlFor="comment">Если есть что сказать</label>
                        <textarea className="p-2 rounded-md w-full border-black border-2" name="comment" id="comment" value={comment} onChange={ (e) => setComment(e.target.value) } placeholder="Введите комментарий..."/>
                    </div>
                    <div className="py-2">
                        <button className="p-2 rounded-md w-full border-black border-2" type="submit">
                            Забронировать
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}
