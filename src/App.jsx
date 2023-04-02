import { useEffect, useState } from "react"

import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"
import { useForm } from "./helpers/useForm"


import './index.css'


export const App = () => {

  
  // name={ name } propietario={ propietario } email={ email } sintomas={ sintomas } date={ date } onInputChange={ onInputChange }
  
  const { name, propietario, email, sintomas, date, id, onInputChange, onResetForm, onSetForm }= useForm({
    name: '',
    propietario:'',
    email: '',
    sintomas: '',
    date:'',
    id:'',
  })

  
  
  
  const [pacientes, setPacientes] = useState([])
  const [ activePaciente, setActivePaciente ] = useState({})
  
  useEffect(() => {
    const getLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS);
    }

    getLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="md:flex mt-12">
        <Formulario name={ name } propietario={ propietario } email={ email } sintomas={ sintomas } date={ date } onInputChange={ onInputChange } onResetForm={ onResetForm } pacientes={ pacientes } setPacientes={ setPacientes } activePaciente={ activePaciente } setActivePaciente= { setActivePaciente } />
        <ListadoPacientes pacientes={ pacientes } onSetForm= { onSetForm } setActivePaciente={ setActivePaciente } setPacientes={ setPacientes } activePaciente={ activePaciente }/>
        
      </div>
    </div>
    
  )
}
