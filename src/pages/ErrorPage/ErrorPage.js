import React from "react"
import error from '../../assets/error.jpg'
import Typography from '@mui/material/Typography'
import { ErrorImage, ErrorPageContainer } from './styled'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error} />
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage