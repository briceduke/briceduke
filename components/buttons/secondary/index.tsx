import React, { ReactElement } from 'react'

import styles from "./secondary.module.scss";

interface Props {
    children: React.ReactNode
    disabled?: boolean
    icon?: string
}

export function Secondary({ children, disabled, icon }: Props): ReactElement {
    return (
        <button disabled={disabled} className={styles.primary}>
            {children}
        </button>
    )
}
