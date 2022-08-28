import { Avatar, Box, Stack, styled, Typography, Paper } from "@mui/material";
import React from "react";
import RightBarFotoOne from './img/1.jpg'
import RightBarFotoTwo from './img/6.jpg'
import RightBarFotoThree from './img/7.jpg'

const BarImg = styled(Avatar)({
    marginTop: '20px',
    height: '100%',
    width: '100%',
    borderRadius: '2%'
})

export const BarBackgroundColor = styled(Paper)({
    padding: '0 10px 10px 10px',
    marginRight: '10px',

})



export const Rightbar = () => {
    return (
        <Box
            flex={2}
            sx={{
                display: { xs: 'none', sm: 'block' },

            }}>
            <BarBackgroundColor>
                <Typography
                    sx={{
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        marginTop: '100px',
                    }}>
                    Акции месяца
                </Typography>
                <Typography
                    sx={{
                        fontSize: '1.1rem',
                    }} >
                    Массаж лица - 5 сеансов по цене 4 <br /><br />
                    Антицеллюлитный массаж - скидка 20% на стоимомть курса <br /><br />
                    Приведи друга на сеанс и получите 10% скидки
                </Typography>
            </BarBackgroundColor>
            <BarBackgroundColor>
                <Typography
                    sx={{
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        marginTop: '30px',
                    }}>
                    Популярные заказы
                </Typography>
                <Typography
                    sx={{
                        fontSize: '1.1rem',
                    }} >
                    Массаж лица - курс из 10 сеансов - 3000грн <br /><br />
                    Общий массаж + массаж лица - 3 часа - 700грн <br /><br />
                    Массаж шеи - 40минут - 200грн
                </Typography>
            </BarBackgroundColor>
            <Stack
                sx={{
                    maxHeight: '400px',
                    maxWidth: '400px',
                    margin: '25px 10px 0 0',
                }} >
                <BarImg alt='tmh' src={RightBarFotoOne} />
                <BarImg alt='tmh' src={RightBarFotoTwo} />
                <BarImg alt='tmh' src={RightBarFotoThree} />
            </Stack>
        </Box >
    )
}
export default Rightbar