import Link from "next/link";
import Removebtn from "./Removebtn";
import {HiPencilAlt} from 'react-icons/hi'


const getTopics= async ()=>{
    try{
        const res = await fetch ("http://localhost:3000/api/topics",{
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("failed to fetch the data");
        }
        return res.json();
    }
    
    catch(error){
        console.log("Error loading topics:",error);
    }
};


export default async function TopicList(){
    const { topic } = await getTopics();


    return(
        <>
        {topic.map(t=>(
        <div className="p-6 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
                <h2 className=" font-bold text-2xl"> {t.title} </h2>
               <div>{t.description}</div>
            </div>
            <div className=" flex gap-2">
                <Removebtn id={t._id}/>
                <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
        ))}
        </>
    )
}