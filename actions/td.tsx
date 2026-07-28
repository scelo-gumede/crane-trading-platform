import { td } from "@/lib/twelvedata";
import { symbol } from "zod";



export const getPrice = async ()=>{

    const price = await td.price({
        symbol:"EUR/USD"
    })

    const newPrice = await price

    return <div>
        {newPrice}
    </div>
}