export default function Body({date,head,text}){
    return(<div className="overflow-y-scroll md:w-100 w-full h-33 flex-none mr-2 border rounded-lg stext-lg text-white ">
        <div className="float-right p-1">{date}</div>
        <div className="pt-5 p-1">
        <div className="font-semibold">{head}</div>
        <div>{text}</div>
        </div>
        
        
        </div>);
}
/*yay*/