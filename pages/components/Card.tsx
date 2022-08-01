import { Badge, Box, Image } from "@chakra-ui/react"
import { AirbnbCardProps } from "../types/ProjectTypes"

export function AirbnbCard({imageUrl, imgDescription}: AirbnbCardProps) {
    return (
        <Box maxW='sm' borderWidth='16px' borderRadius='lg' overflow='hidden'>
            <Image src={imageUrl} alt={imgDescription}/>

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {/*property.title*/}
                </Box>

                <Box>
                    {/*property.formattedPrice*/}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}