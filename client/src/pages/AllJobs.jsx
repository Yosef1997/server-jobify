import { useContext, createContext } from 'react'
import { JobsContainer, SearchContainer } from '../components'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'

const AllJobsContext = createContext()

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs')
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AllJobs = () => {
  const { data } = useLoaderData()
  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  )
}

export const useAllJobsContext = () => useContext(AllJobsContext)
export default AllJobs
