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
            <p className="font-light text-gray-400">Para hablarnos de manera privada sobre cualquier duda, sugerencia o propuesta puedes contactarnos por nuestro Instagram o por nuestro Mail.</p>

        
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
         
    )
}