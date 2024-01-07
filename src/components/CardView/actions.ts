import { fetchGetCarData } from "../../apis/getCars"
import { CarModel } from "./props"

// Fazer uma solicitação para API
export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetCarData(id)

    try {
      if(response) {
        setCarData(response)
        console.log('consulta na API OK')
      }
    } catch (error) {
      console.log('Erro ao buscar da api', error)
      setCarData(null)
    }
}

export const handlePreviousItem =async () => {

}

export const hadleNextItem =async () => {

}
