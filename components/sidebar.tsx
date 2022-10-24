import {Box, List, ListIcon, ListItem, Divider, Center, LinkBox, LinkOverlay} from '@chakra-ui/layout'
import {MdHome, MdSearch, MdPlaylistAdd, MdLibraryMusic, MdFavorite} from 'react-icons/md'
import NextImage from 'next/image'
import NextLink from 'next/link'

const Sidebar = () => {

  const navMenu = [
    {
      title: 'Home',
      icon: MdHome, 
      route: '/'
    },

    {
      title: 'Search',
      icon: MdSearch, 
      route: '/search'
    },

    {
      title: 'Your Library',
      icon: MdLibraryMusic, 
      route: '/library'
    },


  ]

  const musicMenu = [
    {
      title: 'Create Playlist',
      icon: MdPlaylistAdd, 
      route: '/'
    },

    {
      title: 'Liked Songs',
      icon: MdFavorite, 
      route: '/favorites'
    }

  ]

  const playlists = new Array(30).fill(1).map((_,i) => `Playlist ${i + 1}`)

  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
        <Box paddingY="20px" height="100%">
            <Box width="120px" marginBottom="20px" paddingX="20px">
                <NextImage src="/music.png" height={55} width={60} />
            </Box>

            <Box marginBottom="25px">
              <List spacing={3}>
                {navMenu.map(menu =>(
                  <ListItem paddingX="20px" fontSize="16px" key={menu.title}>
                    <LinkBox>
                      <NextLink href={menu.route} passHref>
                          <LinkOverlay>
                            <ListIcon as={menu.icon} color="white" marginRight="20px" fontSize="20px"/>
                            {menu.title}
                          </LinkOverlay>
                      </NextLink>
                    </LinkBox>
                  </ListItem>
                ))}
              </List>
            </Box>
            

            <Box >
              <List spacing={3}>
                {musicMenu.map(menu =>(
                  <ListItem paddingX="20px" fontSize="16px" key={menu.title}>
                    <LinkBox>
                      <NextLink href={menu.route} passHref>
                          <LinkOverlay>
                            <ListIcon as={menu.icon} color="white" marginRight="20px" fontSize="20px"/>
                            {menu.title}
                          </LinkOverlay>
                      </NextLink>
                    </LinkBox>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Divider color={'gray.800'} marginY="20px"/>

            <Box height="65%" overflowY="auto" paddingBottom="20px">
                  <List spacing={3}>
                    {playlists.map(playlist => (
                      <ListItem paddingX="20px" >
                        <LinkBox>
                          <NextLink href="/" passHref>
                            <LinkOverlay>
                              {playlist}
                            </LinkOverlay>
                          </NextLink>
                        </LinkBox>
                      </ListItem>
                    ))}
                  </List>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar