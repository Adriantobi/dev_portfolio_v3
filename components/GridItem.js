'use client'

import Image from 'next/image'
import { motion, stagger } from 'framer-motion'
import styles from '../css/components/griditem.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function GridItem({ size, type, icon, header, subheader, content, buttonContent, buttonColour, link, children }) {
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

    if (link) {
        return (
            <motion.div initial={{ scale: 0 }} animate={{scale: 1}} transition={{type:'spring', stiffness:'330', damping:'35', duration: 0.15}} className={`${styles.GridItem} ${type === 'project' ? `${styles.projectCard}` : type === 'job' ? `${styles.jobCard}` : type === 'social' ? `${styles.socialCard}` : ''}`} style={{gridRow: size === '2x2' ? 'span 2/span 2' : size === '2x1' ? 'span 2/span 2' : size === '2x4' ? 'span 4/span 4' : size === '3x4' ? 'span 4/span 4' : size === '3x3' ? 'span 3/span 3' : size === '1x2' ? 'span 1/ span 1' : '', minWidth: size === '2x2' ? '315px' : size === '2x1' ? '150px' : size === '2x4' ? '315px' : size === '3x4' ? 'auto' : size === '3x3' ? 'auto' : size === '1x2' ? '315px' : '', gridColumn: size === '2x2' ? 'span 2/span 2' : size === '2x1' ? 'span 1/span 1' : size === '2x4' ? 'span 2/span 2' : (size === '3x4' && !mobile) ? 'span 3/span 3' : (size === '3x4' || size === '3x3') && mobile ? 'span 2/span2' : (size === '3x3' && !mobile) ? 'span 3/span 3' : size === '1x2' ? 'span 2/span 2' : '' , minHeight: size === '2x2' ? '150px' : size === '2x1' ? '150px' : size === '2x4' ? '315px' : size === '3x4' ? 'auto' : size === '3x3' ? 'auto' : size === '1x2' ? '75px' : ''}}>
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
                        {size !== '2x1' ? <span className={styles.buttonInfo} style={{backgroundColor: `#${buttonColour}`}}>{buttonContent}</span> : null}
                    </div> : null }
                    { header || subheader || content || (buttonContent && size === '2x1') ? <div className={styles.contentWrapper}>
                        <span>{header}</span>
                        <span className={styles.text}>{subheader}</span>
                        <span className={styles.text}>{content}</span>
                        {size === '2x1' ? <span className={styles.buttonInfo} style={{backgroundColor: `#${buttonColour}`}}>{buttonContent}</span> : null}
                    </div> : null }
                    {children}
                </Link>
            </motion.div>
        )
    }

    return (
        <div className={`${styles.GridItem} ${type === 'project' ? `${styles.projectCard}` : type === 'job' ? `${styles.jobCard}` : type === 'social' ? `${styles.socialCard}` : ''}`} style={{gridRow: size === '2x2' ? 'span 2/span 2' : size === '2x1' ? 'span 2/span 2' : size === '2x4' ? 'span 4/span 4' : size === '3x4' ? 'span 4/span 4' : size === '3x3' ? 'span 3/span 3' : size === '1x2' ? 'span 1/ span 1' : '', minWidth: size === '2x2' ? '315px' : size === '2x1' ? '150px' : size === '2x4' ? '315px' : size === '3x4' ? 'auto' : size === '3x3' ? 'auto' : size === '1x2' ? '315px' : '', gridColumn: size === '2x2' ? 'span 2/span 2' : size === '2x1' ? 'span 1/span 1' : size === '2x4' ? 'span 2/span 2' : (size === '3x4' && !mobile) ? 'span 3/span 3' : (size === '3x4' || size === '3x3') && mobile ? 'span 2/span2' : (size === '3x3' && !mobile) ? 'span 3/span 3' : size === '1x2' ? 'span 2/span 2' : '' , minHeight: size === '2x2' ? '150px' : size === '2x1' ? '150px' : size === '2x4' ? '315px' : size === '3x4' ? 'auto' : size === '3x3' ? 'auto' : size === '1x2' ? '75px' : ''}}>
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
                {size !== '2x1' ? <span className={styles.buttonInfo} style={{backgroundColor: `#${buttonColour}`}}>{buttonContent}</span> : null}
            </div> : null }
            { header || subheader || content || (buttonContent && size === '2x1') ? <div className={styles.contentWrapper}>
                <span>{header}</span>
                <span className={styles.text}>{subheader}</span>
                <span className={styles.text}>{content}</span>
                {size === '2x1' ? <span className={styles.buttonInfo} style={{backgroundColor: `#${buttonColour}`}}>{buttonContent}</span> : null}
            </div> : null }
            {children}
        </div>
    )
}
