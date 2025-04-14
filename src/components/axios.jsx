import axios from "axios";
const getAllData = async (API_URL, needsResponse = true) => {
  try {
    const response = await axios.get(API_URL)
    return needsResponse ? response.data.response : response.data
  } catch (error) {
    console.error('Error getting data:', error)
    throw error
  }
}

  const getOneData = async (API_URL, id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`)
      return response.data
    } catch (error) {
      console.error('Error getting data:', error)
      throw error
    }
  }
  
  // POST (Create)
  const createData = async (newData) => {
    try {
      const response = await axios.post('https://api.example.com/data', newData)
      return response.data
    } catch (error) {
      console.error('Error creating data:', error)
      throw error
    }
  }
  
  // PUT/PATCH (Update)
  const updateData = async (API_URL, id, updatedData) => {
    try {
      // Con PUT (reemplazo completo)
      const responsePut = await axios.put(`${API_URL}/${id}`, updatedData)
      return responsePut.data 
    } catch (error) {
      console.error('Error updating data:', error)
      throw error
    }
  }
  
  // DELETE (Delete)
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`https://api.example.com/data/${id}`)
      return response.data
    } catch (error) {
      console.error('Error deleting data:', error)
      throw error
    }
  }

  export { getAllData, getOneData, createData, updateData, deleteData };