import { Box } from "@chakra-ui/layout"
import Sidebar from "./sidebar"


const PlayerLayout = ({children}) => {
  return (
    <Box width="100vw" height="100vh">
        <Box width="250px" position="absolute" top="0" left="0">
            <Sidebar/>
        </Box>

        <Box marginLeft="250px" marginBottom="100px">
            {children}
        </Box>

        <Box position="absolute" bottom="0" left="0">
            Player Bar
        </Box>
        
    </Box>
  )
}

export default PlayerLayout