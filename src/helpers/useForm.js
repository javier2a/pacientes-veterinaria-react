import { useState } from "react";



export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)



    const onInputChange = ({target})=>{
        const {name, value} =target;
        setFormState({
            ...formState,
            [name]: value,
        })
        // console.log(target);
        
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    const onSetForm = (values) => {
        setFormState(values)
    }
  

    return{
        ...formState,
        formState,

        onInputChange,
        onResetForm,
        onSetForm,
    }
}
