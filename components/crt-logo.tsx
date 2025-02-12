'use client'
import React, { useState } from 'react'

function CrtLogo({ className }: { className: string }) {
    const [currentHue, setCurrentHue] = useState(216)

    const colors = (hue: number) => {
        return {
            baseTop: `hsl(${hue}, 37%, 54%)`,
            baseFront: `hsl(${hue}, 36%, 62%)`,
            sideDarker: `hsl(${hue}, 37%, 60%)`,
            bezel: `hsl(${hue}, 37%, 62%)`,
            buttonSide: `hsl(${hue}, 37%, 55%)`,
            sideLighter: `hsl(${hue}, 36%, 69%)`,
            screenBg: `hsl(${hue}, 38%, 31%)`,
            buttonTop: `hsl(${hue}, 37%, 50%)`,
            text: `hsl(0, 0%, 95%)`,
        }
    }

    const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const percentage = x / rect.width
        const hue = 180 + (percentage * 100)
        setCurrentHue(Math.min(280, Math.max(180, hue)))
    }

    const handleMouseLeave = () => {
        setCurrentHue(216)
    }

    return (
        <svg
            className={className}
            viewBox="0 0 238.65 204.64"
            xmlns="http://www.w3.org/2000/svg"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <g transform="translate(-13.97 -45.07)">
                <path d="M96.73 199.5 41.9 224.03l1.8 10.02 114.56 15.65 70.56-41.07-.34-7.84z" fill={colors(currentHue).baseTop} />
                <path d="m41.89 224.04 117.27 16.47-.92 9.2-114.56-15.65z" fill={colors(currentHue).baseFront} />
                <path d="m228.82 208.65-70.57 41.08.05-9.34 70.2-39.58zM213.73 83.07l37.32 27.55a2.77 4.3 0 0 1 1.57 3.87l-.1 47.9a2.58 4 0 0 1-1.61 3.71l-44.56 28.53z" fill={colors(currentHue).sideDarker} />
                <path d="m14.02 75.25-.05 118.34a6.2 6.2 0 0 0 5.24 6.13l152.81 24.05a4.12 4.12 0 0 0 4.76-4.05l.8-168.82a5.8 5.8 0 0 0-6.73-5.75L18.54 69.93a5.4 5.4 0 0 0-4.53 5.32" fill={colors(currentHue).bezel} />
                <circle cx="161.31" cy="215.49" r="3.54" fill={colors(currentHue).buttonSide} />
                <path d="m174.32 45.73 39.53 20.5a4.9 4.9 0 0 1 2.63 4.59l-6.56 132.64a3 3 0 0 1-1.62 2.51L175 223.05z" fill={colors(currentHue).sideLighter} />
                <path d="m22.52 87.72.45 95.08a7.6 7.6 0 0 0 6.56 7.52l124.09 17.44a8.6 8.6 0 0 0 9.79-8.62l-1.55-130.27a7.86 7.86 0 0 0-9.1-7.66L28.1 81.15a6.6 6.6 0 0 0-5.58 6.57" fill={colors(currentHue).screenBg} />
                <path d="m142.65 209.06-.84.36.45 6.43 8.91 2.2 1.22-.24a.6.6 0 0 0 .48-.53l.53-5.86a.64.64 0 0 0-.53-.69l-9.73-1.73a1 1 0 0 0-.49.06" fill={colors(currentHue).buttonSide} />
                <path d="m141.5 209.82-.53 5.88a.6.6 0 0 0 .47.63l10.05 1.8.57-6.42a.6.6 0 0 0-.47-.62l-9.52-1.7a.5.5 0 0 0-.57.43" fill={colors(currentHue).buttonTop} />
                <circle cx="160.11" cy="215.49" r="3.54" fill={colors(currentHue).buttonTop} />
                <path d="m37.3 170.54-8.84-1.26V152.1l17.31 1.52.38 15.66 21.7 1.43.54-42.76.53-46.88 17.15-2.87v101.28h-8.84v10.92l-39.92-5.38zm57.62-34V76.4l25.46-4.74 27.6-4.48v17.94l8.85-.76v34.99l.09 25.4-17.6.46-.18 8.5-.09 8.14 8.93.44v17.9l8.58.98-.54 20.5-25.72-3.76v-9.85l-.1-7.7-8.75-.89V162.3h-8.84v17.18l-.36 15.93-18.05-2.87zm35.38 0v-8.6h8.84v-17.17l.36-26.13-15.24 2.24-11.47 1.7-.18 30.78v25.77h17.69z" fill={colors(currentHue).text} />
            </g>
        </svg>
    )
}

export default CrtLogo