import React, { useState, useEffect } from 'react'
import MaterialIcons from './MaterialIcons'
import './btn.css'

const Button = ({ ...props }) => {

    const [disableShadow, setDisableShadow] = useState(null)
    const [disabled, setDisabled] = useState(null)
    const [valueIcons, setValueIcons] = useState(null)
    const [size, setSize] = useState(null)
    const [color, setColor] = useState(null)
    const [beforeColor, setBeforeColor] = useState(null)

    const hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    useEffect(() => {
        hexToRgb(props.color) !== null ? setColor(hexToRgb(props.color)) : setColor(null)
        props.disableShadow ? setDisableShadow('disableShadow') : setDisableShadow('')
        props.disabled ? setDisabled('disabled') : setDisabled('')
        props.startIcon || props.endIcon ? setValueIcons('icons') : setValueIcons('')
        props.size === 'sm' ? setSize('sm') : props.size === 'md' ? setSize('md') : props.size ? setSize('lg') : setSize('')
    }, [])

    return (
        <button
            id={(Math.random() * (1000 - 1)) + 1}
            onMouseOver={(e) => {
                if ((color !== null && props.variant === 'outline') || (color !== null && props.variant === 'text')) {
                    const clase = e.target.id
                    const btn = document.getElementById(clase)
                    btn.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, .6)`
                    btn.style.color = `white`
                } else
                    if (color !== null) {
                        const clase = e.target.id
                        const btn = document.getElementById(clase)
                        setBeforeColor(hexToRgb(props.color))
                        btn.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, .6)`
                    }
            }}

            onMouseOut={(e) => {
                if ((color !== null && props.variant === 'outline') || (color !== null && props.variant === 'text')) {
                    const clase = e.target.id
                    const btn = document.getElementById(clase)
                    btn.style.background = `transparent`
                    btn.style.color = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`
                } else
                    if (color !== null) {
                        const clase = e.target.id
                        const btn = document.getElementById(clase)
                        btn.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`
                    }
            }}

            style={
                {
                    paddingLeft: `${props.startIcon ? '15px' : ''}`,
                    paddingRight: `${props.endIcon ? '15px' : ''}`,
                    background: `${color !== null && props.variant === 'outline' ? `transparent` :
                        color !== null && props.variant === 'text' ? `transparent` :
                            color !== null ? `rgba(${color.r}, ${color.g}, ${color.b}, 1)` : ''}`,
                    color: `${color !== null && props.variant === 'outline' ? `rgba(${color.r}, ${color.g}, ${color.b}, 1)` :
                        color !== null && props.variant === 'text' ? `rgba(${color.r}, ${color.g}, ${color.b}, 1)` :
                            color !== null ? '#fff' : props.color === 'default' ? '#000' : props.color ? '#fff' : ''}`,
                    border: `${color !== null && props.variant === 'outline' ? `1px solid rgba(${color.r}, ${color.g}, ${color.b}, 1)` : ''}`
                }
            }
            className={`btn ${props.variant ? props.variant : ''} ${disableShadow} ${disabled} ${valueIcons} ${size} ${!props.color ? '' : props.color} `}>
            <MaterialIcons icon={props.startIcon} />
            Default
            <MaterialIcons icon={props.endIcon} />
        </button >
    )
}

// const style = {
//     values: {
//         paddingLeft: props.
//     }
// }


export default Button