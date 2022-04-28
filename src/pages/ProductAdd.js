import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, FormField } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({ //BU YUP yukarıdan inport edilip kullanılacak. olayı validasyon işlemleri
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => { //values : alttaki fieldlerin yani productName ile unitPrice'ın vaule'ları
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name="productName" placeholder="Ürün adı" />
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı" />
                    <Button color='green' type='submit'>Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
