export default function Body({date,head,text}){
    return(<div className="border rounded-lg stext-lg text-white w-100">
        <div className="float-right ">{date}</div>
        <div className="pt-5 p-1">
        <div className="font-semibold">{head}</div>
        <div>{text}</div>
        </div>
        
        
        </div>);
}