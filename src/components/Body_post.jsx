
const image = ""
export default function Body_post({date,head,text,image}){
    return(<div className=" m-2 lg:m-0 border rounded-lg text-lg text-white ">
        <div className="float-right p-1">{date}</div>
        <div className="font-semibold p-1">{head}</div>
        <img className="rounded-b-lg  mx-auto " src={image}   alt={image}/>
      
        
        
        </div>);
}
/*yay*/