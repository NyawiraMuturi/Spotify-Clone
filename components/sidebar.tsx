import {Box, List, ListIcon, ListItem, Divider, Center, LinkBox, LinkOverlay} from '@chakra-ui/layout'
import {MdHome, MdSearch, MdPlaylistAdd, MdLibraryMusic, MdFavorite} from 'react-icons/md'
import NextImage from 'next/image'

const Sidebar = () => {
  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
        <Box paddingY="20px">
            <Box width="120px" marginBottom="20px" paddingX="20px">
                <NextImage src="/music.png" height={55} width={60} />
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar