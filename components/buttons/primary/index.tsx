import React, { ReactElement } from 'react'

import styles from "./primary.module.scss";

interface Props {
    children: React.ReactNode
    disabled?: boolean
    icon?: string
}

export function Primary({ children, disabled, icon }: Props): ReactElement {
    return (
        <button disabled={disabled} className={styles.primary}>
            {children}
        </button>
    )
}
