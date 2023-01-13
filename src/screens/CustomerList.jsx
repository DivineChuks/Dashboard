import React from 'react'
import {Box, InputBase, Button} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Tabledata from '../components/Tabledata'




const CustomerList = () => {
  return (
    <Box sx={{backgroundColor: '#FCFCFC', padding: '2rem 5rem 8rem'}}>
        <Box>
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center" sx={{backgroundColor: "#fff", padding: "2px 15px", border: "0.5px solid #f5f5f5 ", borderRadius: '5px', width: '250px', overflow: 'hidden'}}>   
                    <SearchIcon sx={{color: '#ccc', marginLeft:"5px"}} />
                    <InputBase placeholder='Search name or phone' sx={{ padding: '0px 20px', marginRight: '5px', '&::placeholder': {fontSize: '5px'}}}  />
                </Box>
                <Box>
                    <Button variant="contained" 
                       sx={{backgroundColor: '#273066', 
                       color: "#fff", 
                       textTransform: "capitalize",
                       borderRadius: '6px'
                    }}>
                        Export as CSV
                    </Button>
                </Box>
            </Box>
            <Box marginTop="50px">
                <Tabledata />
            </Box>
        </Box>
    </Box>
  )
}

export default CustomerList