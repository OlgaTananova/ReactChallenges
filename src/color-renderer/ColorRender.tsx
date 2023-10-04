import Color from './Color.tsx'

const colors = [{
    hex: '#91A6FF',
    name: 'Cornflower Blue'
},
    {
        hex: '#FF88DC',
        name: 'Persian Pink'
    },
    {
        hex: '#80FF72',
        name: 'Screaming Green'
    },
    {
        hex: '#FF5154',
        name: 'Tart Orange'
    }]

export default function ColorRenderer() {
    return (
        <>
            <h2>
                Use the Color component to render each
                item in the colors array on the page! </h2>
            <div>
                {colors.map((color, index)=> {
                    return <Color key={index} name={color.name} hex={color.hex} />
                })}
            </div>
        </>
    )
}
