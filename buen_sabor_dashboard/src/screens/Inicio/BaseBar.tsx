import { Box } from '@mui/material'
import { BarChart } from '@mui/x-charts'
const BaseBar = () => {
  return (
    
    <Box>
         <BarChart
             colors={['#CCDD91']} 
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: ['bar 1', 'bar 2', 'bar 3','bar 4','bar 5','bar 6'],
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: [2, 5, 3, 4, 1, 6],
                        },
                    ]}
                    width={600}
                    height={300}
                />

    </Box>
  )
}

export default BaseBar