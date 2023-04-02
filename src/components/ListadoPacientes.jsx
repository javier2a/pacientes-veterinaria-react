import { Paciente } from "./Paciente"



export const ListadoPacientes = ({pacientes, onSetForm, setActivePaciente, setPacientes, activePaciente }) => {
  // console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {
        pacientes && pacientes.length ?(
          <>
            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className=" text-xl mt-5 mb-10 text-center">
                Administras tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>
            {
            pacientes.map( (paciente) => <Paciente paciente={ paciente } key={ paciente.id } pacientes={ pacientes } onSetForm={ onSetForm } setActivePaciente={ setActivePaciente } setPacientes={ setPacientes } activePaciente={activePaciente}/>)
            }
          </>
        ): (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className=" text-xl mt-5 mb-10 text-center">
                Comienza agregando pacientes {''}
                <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
            </p>
          </>
        )
      }
      
    </div>
  )
}
