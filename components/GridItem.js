'use client'

import Image from 'next/image'
import { color, motion } from 'framer-motion'
import styles from '../css/components/griditem.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function GridItem({ size, type, icon, header, subheader, content, buttonContent, buttonColour, link, colourBg,  children }) {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        const getScreenSize = () => {
            return window.innerWidth
        }

        const mobileSize = () => {
            if (getScreenSize() < 520) {
                setMobile(true)
            } else {
                setMobile(false)
            }
        }

        window.onload = mobileSize()
        window.addEventListener('resize', mobileSize)
    }, [])

    const getGridItemProperties = (size) => {
        if (size === '2x2') {
            return {
                gridArea: 'span 2/span 2/span 2/span 2',
                minWidth: '315px',
                minHeight: '150px',
            }
        } if (size === '2x1') {
            if (mobile) {
                return {
                    gridArea: 'span 1/span 1/span 1/span 1',
                    minWidth: '150px',
                    minHeight: '150px',
                }
            }
            return {
                gridArea: 'span 2/span 1/span 2/span 1',
                minWidth: '150px',
                minHeight: '150px',
            }
        } if (size === '1x2') {
            return {
                gridArea: 'span 1/span 2/span 1/span 2',
                minWidth: '315px',
                minHeight: '75px',
            }
        } if (size === '2x4') {
            return {
                gridArea: 'span 4/span 2/span 4/span 2',
                minWidth: '315px',
                minHeight: '315px',
            }
        } if (size === '3x4') {
            if (mobile) {
                return {
                    gridArea: 'span 4/span 2/span 4/span 2',
                    minWidth: 'auto',
                    minHeight: 'auto',
                }
            }

            return {
                gridArea: 'span 4/span 3/span 4/span 3',
                minWidth: 'auto',
                minHeight: 'auto',
            }
        } if (size === '3x3') {
            if (mobile) {
                return {
                    gridArea: 'span 3/span 2/span 3/span 2',
                    minWidth: 'auto',
                    minHeight: 'auto',
                }
            }

            return {
                gridArea: 'span 3/span 3/span 3/span 3',
                minWidth: 'auto',
                minHeight: 'auto',
            }
        }
    }

    const gridItem = getGridItemProperties(size)

    if (link) {
        return (
            <motion.div 
                initial={{ scale: 0 }} animate={{scale: 1}} 
                transition={{type:'spring', stiffness:'330', damping:'35', duration: 0.15}} 
                className={`${styles.GridItem} ${type === 'project' ? `${styles.projectCard}` : type === 'job' ? `${styles.jobCard}` : type === 'social' ? `${styles.socialCard}` : ''}`} 
                style={{gridArea: gridItem.gridArea, minWidth: gridItem.minWidth, minHeight: gridItem.minHeight, '--bgColour': colourBg ? buttonColour : 'var(--grid-item)'}}
            >
                <Link href={link} target='_blank'>        
                    { icon || (buttonContent && size !== '2x1') ? <div className={styles.headingWrapper}>
                        <div className={styles.iconWrapper}>
                            <Image
                                src={icon}
                                width={48}
                                height={48}
                                alt={`${header} Image`}
                                quality={100}
                                unoptimized
                            />
                        </div>
                        {size !== '2x1' ? <span className={styles.buttonInfo} style={{backgroundColor: `rgb(${buttonColour})`, color: buttonColour === '0, 0, 0' ? 'rgb(255, 255, 255)' : buttonColour === '255, 255, 255' ? 'rgb(0, 0, 0)' : ''}}>{buttonContent}</span> : null}
                    </div> : null }
                    { header || subheader || content || (buttonContent && size === '2x1') ? <div className={styles.contentWrapper}>
                        <span>{header}</span>
                        <span className={styles.text}>{subheader}</span>
                        <span className={styles.text}>{content}</span>
                        {size === '2x1' ? <span className={styles.buttonInfo} style={{backgroundColor: `rgb(${buttonColour})`, color: buttonColour === '0, 0, 0' ? 'rgb(255, 255, 255)' : buttonColour === '255, 255, 255' ? 'rgb(0, 0, 0)' : ''}}>{buttonContent}</span> : null}
                    </div> : null }
                    {children}
                </Link>
            </motion.div>
        )
    }

    return (
        <div className={`${styles.GridItem} ${type === 'project' ? `${styles.projectCard}` : type === 'job' ? `${styles.jobCard}` : type === 'social' ? `${styles.socialCard}` : ''}`} style={{gridArea: gridItem.gridArea, minWidth: gridItem.minWidth,minHeight: gridItem.minHeight}}>
            { icon || (buttonContent && size !== '2x1') ? <div className={styles.headingWrapper}>
                <div className={styles.iconWrapper}>
                    <Image
                        src={icon}
                        width={48}
                        height={48}
                        alt={`${header} Image`}
                        quality={100}
                        unoptimized
                    />
                </div>
                {size !== '2x1' ? <span className={styles.buttonInfo} style={{backgroundColor: `rgb(${buttonColour})`, color: buttonColour === '0, 0, 0' ? 'rgb(255, 255, 255)' : buttonColour === '255, 255, 255' ? 'rgb(0, 0, 0)' : ''}}>{buttonContent}</span> : null}
            </div> : null }
            { header || subheader || content || (buttonContent && size === '2x1') ? <div className={styles.contentWrapper}>
                <span>{header}</span>
                <span className={styles.text}>{subheader}</span>
                <span className={styles.text}>{content}</span>
                {size === '2x1' ? <span className={styles.buttonInfo} style={{backgroundColor: `rgb(${buttonColour})`, color: buttonColour === '0, 0, 0' ? 'rgb(255, 255, 255)' : buttonColour === '255, 255, 255' ? 'rgb(0, 0, 0)' : ''}}>{buttonContent}</span> : null}
            </div> : null }
            {children}
        </div>
    )
}
