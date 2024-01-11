import styles from '../css/components/projectbento.module.css'

import Image from "next/image"
import GridItem from "./GridItem"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProjectBento({ title, description, image, link, github }) {
    return (
        <GridItem size='3x4' type={'project'}>
            <div className={styles.content}>
                <Link href={link} target='_blank'>
                <div className={styles.textWrapper}>
                    <div className={styles.titleLink}>
                        <div className={styles.innerWrapper}>
                            <span>{title} <ArrowRight width={18} height={18}/></span>
                            <span>{title} <ArrowRight width={18} height={18}/></span>
                        </div>
                    </div>
                    <span className={styles.description}>{description}</span>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        width={0}
                        height={0}
                        sizes='100vw'
                        alt={`${title} image`}
                        style={{width: '100%', height: 'auto'}}
                    />
                </div>
                </Link>
            </div>
        </GridItem>
    ) 
}
