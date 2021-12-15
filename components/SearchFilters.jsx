import {useEffect, useState} from 'react'
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button} from "@chakra-ui/react"
import {useRouter} from "next/router"
import {MyCancel} from "react-icons/md"
import Inmage from "next/image"



const SearchFilters = () => {
    const [filters, setFilters] = useState({})
    
    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="warp">

        </Flex>
    )
}

export default SearchFilters
