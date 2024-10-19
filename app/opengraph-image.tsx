import { ImageResponse } from 'next/og'
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ['latin'],
    weight: '700'
})

export const runtime = 'edge'
export const alt = 'Eco Tours - Sustainable Adventures'
export const size = {
    width: 1200,
    height: 630
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F0FFF4', // Light green background
                    fontFamily: `${inter.style.fontFamily}, sans-serif`,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '10px',
                        background: 'linear-gradient(90deg, #22C55E, #15803D, #166534)', // Green gradient
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '2rem',
                        maxWidth: '90%',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '4.5rem',
                            color: '#166534', // Dark green
                            marginBottom: '1rem',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                        }}
                    >
                        Eco Tours
                    </h1>
                    <p
                        style={{
                            fontSize: '2.5rem',
                            color: '#15803D', // Medium green
                            marginBottom: '2rem',
                            maxWidth: '80%',
                        }}
                    >
                        Sustainable Adventures in Nature 🌿 | Preserve, Explore, Inspire 🌍
                    </p>
                    <div
                        style={{
                            fontSize: '2rem',
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            padding: '0.5rem 1.5rem',
                            backgroundColor: '#22C55E', // Light green
                            borderRadius: '50px',
                        }}
                    >
                        🌐 www.eco-tours.com
                    </div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '1rem',
                        background: 'rgba(22, 101, 52, 0.8)', // Semi-transparent dark green
                        color: '#FFFFFF',
                        fontSize: '1.5rem',
                        textAlign: 'center',
                    }}
                >
                    Eco-Friendly Safaris 🦁 | Sustainable Lodges 🏡 | Conservation Projects 🐘
                </div>
            </div>
        ),
        {
            ...size
        }
    )
}