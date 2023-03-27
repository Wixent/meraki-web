import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Checkbox } from "@mui/material";

import hr from "../assets/curve-hr.svg"

export default function Contactanos() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const { control } = useForm({
        defaultValues: {
          firstName: '',
          select: {}
        }
    });
    return (
        <div id="contact" className="mt-4 text-white">
            
            <h1 className="text-2xl font-bold">Contactanos</h1>
            <p className="font-light text-gray-400">Rellena el formulario para hablarnos de manera privada sobre cualquier duda, sugerencia o propuesta.</p>

       
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nombre" {...register("Nombre", {})} />
            <input type="email" placeholder="Mail" {...register("Mail", {})} />
            <textarea {...register("Mensaje", {})} />
            
            <input type="submit" />
            </form>
        
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
         
    )
}