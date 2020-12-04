import React from 'react';
import { Card} from 'antd'

import styles from './detail.module.css';
import SingleProductCheckout from './singleproduct';

function CheckoutDetails() {
    return (
        <Card className={styles.card}>
                <SingleProductCheckout/>
        </Card>
    )
}

export default CheckoutDetails
