import { IonPage, IonContent } from '@ionic/react';
import { ResponsiveLine } from '@nivo/line';

const data = [
   {
     "id": "japan",
     "color": "hsl(132, 70%, 50%)",
     "data": [
       {
         "x": "plane",
         "y": 193
       },
       {
         "x": "helicopter",
         "y": 271
       },
       {
         "x": "boat",
         "y": 146
       },
       {
         "x": "train",
         "y": 266
       },
       {
         "x": "subway",
         "y": 197
       },
       {
         "x": "bus",
         "y": 216
       },
       {
         "x": "car",
         "y": 205
       },
       {
         "x": "moto",
         "y": 212
       },
       {
         "x": "bicycle",
         "y": 257
       },
       {
         "x": "horse",
         "y": 32
       },
       {
         "x": "skateboard",
         "y": 254
       },
       {
         "x": "others",
         "y": 139
       }
     ]
   },
   {
     "id": "france",
     "color": "hsl(337, 70%, 50%)",
     "data": [
       {
         "x": "plane",
         "y": 25
       },
       {
         "x": "helicopter",
         "y": 126
       },
       {
         "x": "boat",
         "y": 265
       },
       {
         "x": "train",
         "y": 0
       },
       {
         "x": "subway",
         "y": 159
       },
       {
         "x": "bus",
         "y": 232
       },
       {
         "x": "car",
         "y": 132
       },
       {
         "x": "moto",
         "y": 234
       },
       {
         "x": "bicycle",
         "y": 291
       },
       {
         "x": "horse",
         "y": 251
       },
       {
         "x": "skateboard",
         "y": 207
       },
       {
         "x": "others",
         "y": 263
       }
     ]
   },
   {
     "id": "us",
     "color": "hsl(41, 70%, 50%)",
     "data": [
       {
         "x": "plane",
         "y": 124
       },
       {
         "x": "helicopter",
         "y": 151
       },
       {
         "x": "boat",
         "y": 202
       },
       {
         "x": "train",
         "y": 227
       },
       {
         "x": "subway",
         "y": 236
       },
       {
         "x": "bus",
         "y": 204
       },
       {
         "x": "car",
         "y": 8
       },
       {
         "x": "moto",
         "y": 222
       },
       {
         "x": "bicycle",
         "y": 251
       },
       {
         "x": "horse",
         "y": 68
       },
       {
         "x": "skateboard",
         "y": 125
       },
       {
         "x": "others",
         "y": 208
       }
     ]
   },
   {
     "id": "germany",
     "color": "hsl(351, 70%, 50%)",
     "data": [
       {
         "x": "plane",
         "y": 257
       },
       {
         "x": "helicopter",
         "y": 0
       },
       {
         "x": "boat",
         "y": 101
       },
       {
         "x": "train",
         "y": 67
       },
       {
         "x": "subway",
         "y": 5
       },
       {
         "x": "bus",
         "y": 223
       },
       {
         "x": "car",
         "y": 288
       },
       {
         "x": "moto",
         "y": 210
       },
       {
         "x": "bicycle",
         "y": 110
       },
       {
         "x": "horse",
         "y": 220
       },
       {
         "x": "skateboard",
         "y": 249
       },
       {
         "x": "others",
         "y": 212
       }
     ]
   },
   {
     "id": "norway",
     "color": "hsl(191, 70%, 50%)",
     "data": [
       {
         "x": "plane",
         "y": 98
       },
       {
         "x": "helicopter",
         "y": 59
       },
       {
         "x": "boat",
         "y": 213
       },
       {
         "x": "train",
         "y": 110
       },
       {
         "x": "subway",
         "y": 215
       },
       {
         "x": "bus",
         "y": 126
       },
       {
         "x": "car",
         "y": 130
       },
       {
         "x": "moto",
         "y": 297
       },
       {
         "x": "bicycle",
         "y": 52
       },
       {
         "x": "horse",
         "y": 280
       },
       {
         "x": "skateboard",
         "y": 131
       },
       {
         "x": "others",
         "y": 211
       }
     ]
   }
 ]

const MyResponsiveLine = () => (
   <ResponsiveLine
       data={data}
       margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
       xScale={{ type: 'point' }}
       yScale={{
           type: 'linear',
           min: 'auto',
           max: 'auto',
           stacked: true,
           reverse: false
       }}
       axisTop={null}
       axisRight={null}
       axisBottom={{
           orient: 'bottom',
           tickSize: 0,
           tickPadding: 5,
           tickRotation: 0,
           legend: '',
           legendOffset: 13,
           legendPosition: 'middle'
       }}
       axisLeft={{
           orient: 'left',
           tickSize: 0,
           tickPadding: 20,
           tickRotation: 0,
           legend: '',
           legendOffset: 0,
           legendPosition: 'middle'
       }}
       enableGridX={false}
       enableGridY={false}
       pointSize={10}
       pointColor={{ theme: 'background' }}
       pointBorderWidth={2}
       pointBorderColor={{ from: 'serieColor', modifiers: [] }}
       pointLabelYOffset={-12}
       useMesh={true}
       
   />
)
function RegisterList2() {
   return(
      <IonPage>
         <IonContent class="ion-padding bg-color1">
            <MyResponsiveLine/>
         </IonContent>
      </IonPage>
   )
}

export default RegisterList2;