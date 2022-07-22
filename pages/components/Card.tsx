import { Badge, Box, Image } from "@chakra-ui/react"
import { AirbnbCardProps } from "../types/ProjectTypes"

// TODO type the prop
// https://fettblog.eu/typescript-react/prop-types/
export function AirbnbCard({ imageUrl, projectName, regions }: AirbnbCardProps) {
    return (
        <Box maxW='sm' borderWidth='0px' borderRadius='xl' overflow='hidden' bg="#6EB4D1">
            <Image src={imageUrl} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    {
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            {regions?.at(0)}
                        </Badge>
                    }
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
                    <Box as='span' color='gray.600' fontSize='m'>
                        {projectName}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}