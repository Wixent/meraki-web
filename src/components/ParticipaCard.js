export default function ParticipaCard(props){
    return (
        <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="100" style={{marginTop: "10px"}} className="hover:bg-dark w-full h-full bg-dark-100 rounded-md py-4 px-4">
            <div className="mt-2">
                <p className="font-bold md:text-xl participa">{(props.name && props.name) || !props.name && "Anónimo"}</p>
                <p className="font-light md:text-lg participa">{props.propuesta}</p>
            </div>
        </div>
    )
}