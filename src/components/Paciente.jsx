import { useEffect } from "react"
import { useForm } from "../helpers/useForm"


export const Paciente = ( {paciente, pacientes, onSetForm, setActivePaciente, setPacientes, activePaciente } ) => {

  const {name, propietario, email, sintomas, date, id } = paciente
  
  
  

  const handdleEditButton = ( event ) => {
    // pacientes.find( paciente => {
    //   if (paciente.id === id){
    //     onSetForm(paciente)
      
    //   }
    // } )
    onSetForm(paciente)
    setActivePaciente( paciente )
    // console.log(paciente);
  }

  const handdleDeleteButton = ( id ) => {
    // console.log(pacientes);
    const pacientesActualizado = pacientes.filter(paciente => paciente.id !== id )
    // console.log(pacientesActualizado);
    setPacientes(pacientesActualizado);

  }


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
          <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button onClick={ handdleEditButton } type="button" className="py-2 px-10 font-bold uppercase rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 transition">Editar</button>
          <button onClick={ ()=> handdleDeleteButton(id) } type="button" className="py-2 px-10 font-bold uppercase rounded bg-red-600 text-white cursor-pointer hover:bg-red-700 transition">Eliminar</button>
        </div>
      </div>
  )
}
