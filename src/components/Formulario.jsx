import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { randomId } from '../helpers/randomId';


export const Formulario = ({name, propietario, email, sintomas, date, id, onInputChange, onResetForm, pacientes, setPacientes, activePaciente, setActivePaciente }) => {
  // {name, propietario, email, sintomas, date, onInputChange}
  // const {name, propietario, email, sintomas, date, onInputChange} = props
  // console.log(props);

  

  const handdleSubmit = (event) => {
    event.preventDefault()
    if (Object.entries(activePaciente).length === 0 ) {
      if([name, propietario, email, date, sintomas].includes('')) {
        Swal.fire('Ha Ocurrido un Error', 'Faltan Campos por Llenar', 'error');
        return
      }else{
        
        id = randomId()
        setPacientes([...pacientes,{name, propietario, email, sintomas, date, id} ])
        onResetForm()
      }
    }else{
    const pacientesActualizados = pacientes.map( (paciente) => {
      const id = paciente.id
      return id === activePaciente.id? ({name, propietario, email, sintomas, date, id}): (paciente)
    } )
    setPacientes(pacientesActualizados)
    onResetForm()
    setActivePaciente({})
    }

    
  }



  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form onSubmit={ handdleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 ">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input onChange={ onInputChange } id="mascota"  name='name' value={ name } className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota"/>

        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input onChange={ onInputChange } name='propietario' value={ propietario } id="propietario" className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del Propietario"/>

        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input onChange={ onInputChange } name="email" value={ email } id="email" className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md" type="email" placeholder="Email Contacto Propietario"/>

        </div>
        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
          <input onChange={ onInputChange } name='date' value={ date } id="date" className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md" type="date"/>

        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea 
            onChange={ onInputChange }
            name='sintomas'
            value={ sintomas }
            id="sintomas" 
            className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
          />

        </div>
        {
          
          Object.entries(activePaciente).length === 0? (
              <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                value="Agregar Paciente"
              />
          ):(
            <input 
              type="submit" 
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
              value="Actualizar Paciente"
            />
          )
        }
        

        
      </form>
    </div>
  )
}
