import * as React from 'react';
import {
    Image,
} from '@aws-amplify/ui-react';


const CustomImage = (props) => {

    return (
        <Image
            src={props.src}
            srcSet=""
            sizes=""
            alt={props.alt}
            objectFit="fill"
            objectPosition="initial"
            backgroundColor="initial"
            borderRadius="initial"
            border="initial"
            boxShadow="initial"
            color="initial"
            height="100%"
            maxHeight="initial"
            maxWidth="initial"
            minHeight="initial"
            minWidth="initial"
            opacity="100%"
            padding="0"
            width={props.width}
            onClick={() => alert('📸 Say cheese!')}
        />
    )
}

export default CustomImage;